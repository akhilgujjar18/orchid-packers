import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import type {Plugin} from 'vite';

interface QuoteLead {
  id: string;
  fullName: string;
  mobile: string;
  email?: string;
  movingFrom: string;
  movingTo: string;
  serviceRequired: string;
  inventorySize?: string;
  moveDate?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'survey_scheduled';
}

const mockLeads: QuoteLead[] = [
  {
    id: 'OPM-2026-9041',
    fullName: 'Rahul Deshmukh',
    mobile: '9822145678',
    email: 'rahul.d@gmail.com',
    movingFrom: 'Pune - Hinjewadi Phase 1',
    movingTo: 'Pune - Kharadi Eon IT Park',
    serviceRequired: 'Household Shifting',
    inventorySize: '2 BHK',
    moveDate: '2026-09-28',
    submittedAt: '2026-09-23T08:15:00Z',
    status: 'new',
  },
  {
    id: 'OPM-2026-9042',
    fullName: 'Pooja Kulkarni',
    mobile: '9765412390',
    email: 'pooja.kulkarni@techfirm.com',
    movingFrom: 'Pune - Baner',
    movingTo: 'Bangalore - Whitefield',
    serviceRequired: 'Household Shifting',
    inventorySize: '3 BHK',
    moveDate: '2026-10-02',
    submittedAt: '2026-09-23T09:40:00Z',
    status: 'contacted',
  },
];

const simulatedApiPlugin = (): Plugin => ({
  name: 'simulated-quote-api',
  configureServer(server) {
    server.middlewares.use('/api/quote', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
      }

      if (req.method === 'GET') {
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            success: true,
            totalLeads: mockLeads.length,
            leads: mockLeads,
          })
        );
        return;
      }

      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}');

            if (!data.fullName || !data.mobile || !data.movingFrom || !data.movingTo) {
              res.statusCode = 400;
              res.end(
                JSON.stringify({
                  success: false,
                  error: 'Please provide full name, mobile number, moving from, and moving to locations.',
                })
              );
              return;
            }

            const cleanPhone = String(data.mobile).replace(/\D/g, '');
            if (cleanPhone.length < 10) {
              res.statusCode = 400;
              res.end(
                JSON.stringify({
                  success: false,
                  error: 'Please enter a valid 10-digit mobile number.',
                })
              );
              return;
            }

            const quoteId = `OPM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
            const newLead: QuoteLead = {
              id: quoteId,
              fullName: String(data.fullName).trim(),
              mobile: cleanPhone,
              email: data.email ? String(data.email).trim() : undefined,
              movingFrom: String(data.movingFrom).trim(),
              movingTo: String(data.movingTo).trim(),
              serviceRequired: String(data.serviceRequired || 'Household Shifting'),
              inventorySize: data.inventorySize ? String(data.inventorySize) : '2 BHK',
              moveDate: data.moveDate ? String(data.moveDate) : undefined,
              submittedAt: new Date().toISOString(),
              status: 'new',
            };

            mockLeads.unshift(newLead);

            res.statusCode = 201;
            res.end(
              JSON.stringify({
                success: true,
                quoteId,
                message:
                  'Quote Request Received! Our Pune relocation coordinator will call you within 15 minutes.',
                lead: newLead,
              })
            );
          } catch {
            res.statusCode = 400;
            res.end(
              JSON.stringify({
                success: false,
                error: 'Invalid JSON request payload.',
              })
            );
          }
        });
        return;
      }

      res.statusCode = 405;
      res.end(JSON.stringify({success: false, error: 'Method Not Allowed'}));
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), simulatedApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
