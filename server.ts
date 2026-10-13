import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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

// Quote API Endpoints
app.get('/api/quote', (req, res) => {
  res.json({
    success: true,
    totalLeads: mockLeads.length,
    leads: mockLeads,
  });
});

app.post('/api/quote', (req, res) => {
  const { fullName, mobile, email, movingFrom, movingTo, serviceRequired, inventorySize, moveDate } = req.body;

  if (!fullName || !mobile || !movingFrom || !movingTo) {
    return res.status(400).json({
      success: false,
      error: 'Please provide full name, mobile number, moving from, and moving to locations.',
    });
  }

  const cleanPhone = String(mobile).replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid 10-digit mobile number.',
    });
  }

  const quoteId = `OPM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const newLead: QuoteLead = {
    id: quoteId,
    fullName: String(fullName).trim(),
    mobile: cleanPhone,
    email: email ? String(email).trim() : undefined,
    movingFrom: String(movingFrom).trim(),
    movingTo: String(movingTo).trim(),
    serviceRequired: String(serviceRequired || 'Household Shifting'),
    inventorySize: inventorySize ? String(inventorySize) : '2 BHK',
    moveDate: moveDate ? String(moveDate) : undefined,
    submittedAt: new Date().toISOString(),
    status: 'new',
  };

  mockLeads.unshift(newLead);

  return res.status(201).json({
    success: true,
    quoteId,
    message: 'Quote Request Received! Our Pune relocation coordinator will call you within 15 minutes.',
    lead: newLead,
  });
});

// Serve static assets in production
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start listening if executed directly
if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => {
    console.log(`Orchid Packers Server running on port ${PORT}`);
  });
}

export default app;
