const RESEND_API_URL = 'https://api.resend.com/emails';
const ADMIN_EMAIL = 'islaglampingcompany@gmail.com';
const ADMIN_CC = 'gilad@011.ninja';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(dateString) {
  return new Date(`${dateString}T12:00:00Z`).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function generateReservationCode() {
  const prefix = 'IAG';
  const year = '28';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i += 1) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${year}-${code}`;
}

function buildGuestEmailHtml(details) {
  const fullName = escapeHtml(details.fullName);
  const firstName = escapeHtml(details.firstName);
  const email = escapeHtml(details.email);
  const reservationCode = escapeHtml(details.reservationCode);
  const arrival = escapeHtml(details.arrivalFormatted);
  const departure = escapeHtml(details.departureFormatted);
  const guests = escapeHtml(details.guests);
  const tentType = escapeHtml(details.tentType);
  const hearAbout = escapeHtml(details.hearAbout);
  const interests = escapeHtml(details.interests || 'None provided').replace(/\n/g, '<br>');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Reservation Enquiry</title>
  </head>
  <body style="margin:0; padding:0; background:#120a07; font-family: Georgia, 'Times New Roman', serif; color:#faf0dc;">
    <div style="background:#120a07; padding:32px 16px;">
      <div style="max-width:640px; margin:0 auto; border:1px solid #c9a84c; background:#2c1810;">
        <div style="padding:44px 28px 40px; text-align:center;">
          <div style="font-size:54px; line-height:1; color:#7ea85f; margin-bottom:28px;">🌿</div>
          <div style="font-size:30px; line-height:1.2; letter-spacing:0.14em; text-transform:uppercase; color:#c9a84c; margin-bottom:24px;">Thank You, ${firstName}</div>
          <div style="font-size:16px; line-height:1.9; color:rgba(250,240,220,0.9); max-width:520px; margin:0 auto 24px;">
            Your reservation enquiry has been received. A member of our team will contact you personally within 24 hours to discuss your stay at Isla Aguada Glamping Co.
          </div>
          <div style="font-size:16px; line-height:1.9; color:rgba(250,240,220,0.9); margin:0 auto 28px;">
            A copy of your enquiry was sent to <span style="color:#c9a84c; font-weight:700;">${email}</span>
          </div>
          <div style="max-width:520px; margin:0 auto; border:1px solid rgba(201,168,76,0.45); background:rgba(201,168,76,0.08); padding:22px 18px 20px;">
            <div style="font-size:11px; letter-spacing:0.24em; text-transform:uppercase; color:rgba(201,168,76,0.75); margin-bottom:14px;">Your Reservation Code</div>
            <div style="font-size:32px; letter-spacing:0.18em; color:#c9a84c;">${reservationCode}</div>
          </div>
          <div style="font-size:16px; line-height:1.9; color:rgba(250,240,220,0.78); margin:28px auto 0; max-width:520px;">
            Please keep this code for reference. Our team will use it when contacting you.
          </div>
          <div style="width:40px; height:1px; background:rgba(201,168,76,0.45); margin:22px auto;"></div>
          <div style="font-size:18px; line-height:1.8; color:rgba(250,240,220,0.82); font-style:italic; margin:0 auto 30px; max-width:520px;">
            "Where the Jungle Meets the Sea — January 2028"
          </div>
          <div style="display:inline-block; background:#c9a84c; color:#2c1810; text-decoration:none; padding:14px 34px; letter-spacing:0.22em; text-transform:uppercase; font-size:12px;">Close</div>
        </div>
      </div>

      <div style="max-width:640px; margin:18px auto 0; color:rgba(250,240,220,0.6); font-size:12px; line-height:1.8;">
        <div style="text-transform:uppercase; letter-spacing:0.18em; color:#c9a84c; margin-bottom:12px;">Reservation Details</div>
        <div><strong style="color:#faf0dc;">Guest:</strong> ${fullName}</div>
        <div><strong style="color:#faf0dc;">Email:</strong> ${email}</div>
        <div><strong style="color:#faf0dc;">Arrival:</strong> ${arrival}</div>
        <div><strong style="color:#faf0dc;">Departure:</strong> ${departure}</div>
        <div><strong style="color:#faf0dc;">Guests:</strong> ${guests}</div>
        <div><strong style="color:#faf0dc;">Tent Preference:</strong> ${tentType}</div>
        <div><strong style="color:#faf0dc;">How Heard About Us:</strong> ${hearAbout}</div>
        <div style="margin-top:10px;"><strong style="color:#faf0dc;">Special Requests:</strong><br>${interests.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  </body>
</html>`;
}

function buildAdminEmailHtml(details) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Reservation Enquiry</title>
  </head>
  <body style="margin:0; padding:0; background:#120a07; font-family: Arial, Helvetica, sans-serif; color:#faf0dc;">
    <div style="padding:24px; background:#120a07;">
      <div style="max-width:760px; margin:0 auto; border:1px solid rgba(201,168,76,0.35); background:#2c1810; padding:28px;">
        <div style="font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color:#c9a84c; margin-bottom:12px;">Isla Aguada Glamping Co.</div>
        <h1 style="margin:0 0 18px; font-family: Georgia, 'Times New Roman', serif; font-size:28px; letter-spacing:0.08em; text-transform:uppercase; color:#c9a84c;">New Reservation Enquiry</h1>
        <table style="width:100%; border-collapse:collapse; font-size:14px; line-height:1.8;">
          <tr><td style="padding:6px 0; color:#c9a84c; width:220px;">Reservation Code</td><td>${escapeHtml(details.reservationCode)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Guest Name</td><td>${escapeHtml(details.fullName)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Email</td><td>${escapeHtml(details.email)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Phone</td><td>${escapeHtml(details.phone)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Arrival</td><td>${escapeHtml(details.arrivalFormatted)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Departure</td><td>${escapeHtml(details.departureFormatted)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Guests</td><td>${escapeHtml(details.guests)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">Tent Preference</td><td>${escapeHtml(details.tentType)}</td></tr>
          <tr><td style="padding:6px 0; color:#c9a84c;">How Heard About Us</td><td>${escapeHtml(details.hearAbout)}</td></tr>
        </table>
        <div style="margin-top:18px; color:#c9a84c; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; font-size:12px;">Special Requests</div>
        <div style="margin-top:10px; background:rgba(201,168,76,0.08); border:1px solid rgba(201,168,76,0.2); padding:14px 16px; white-space:pre-wrap;">${escapeHtml(details.interests || 'None provided')}</div>
      </div>
    </div>
  </body>
</html>`;
}

function buildPlainText(details) {
  return [
    'Isla Aguada Glamping Co.',
    '',
    `Reservation Code: ${details.reservationCode}`,
    `Guest Name: ${details.fullName}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Arrival: ${details.arrivalFormatted}`,
    `Departure: ${details.departureFormatted}`,
    `Guests: ${details.guests}`,
    `Tent Preference: ${details.tentType}`,
    `How Heard About Us: ${details.hearAbout}`,
    '',
    'Special Requests',
    details.interests || 'None provided',
  ].join('\n');
}

async function sendResendEmail(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Isla Aguada Glamping Co. <onboarding@resend.dev>';

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY');
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `Resend returned ${response.status}`);
  }
  return { fromEmail, data };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const firstName = String(body.firstName || '').trim();
    const lastName = String(body.lastName || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const arrivalDate = String(body.arrivalDate || '').trim();
    const departureDate = String(body.departureDate || '').trim();
    const guests = String(body.guests || '').trim();
    const tentType = String(body.tentType || 'No Preference').trim();
    const interests = String(body.interests || '').trim();
    const hearAbout = String(body.hearAbout || 'Not specified').trim();
    const pageUrl = String(body.pageUrl || '').trim();

    if (!firstName || !lastName) {
      return res.status(400).json({ ok: false, error: 'Full name is required.' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: 'A valid email address is required.' });
    }
    if (!phone || !arrivalDate || !departureDate || !guests) {
      return res.status(400).json({ ok: false, error: 'Missing required reservation details.' });
    }

    const reservationCode = generateReservationCode();
    const fullName = `${firstName} ${lastName}`;
    const arrivalFormatted = formatDate(arrivalDate);
    const departureFormatted = formatDate(departureDate);
    const details = {
      firstName,
      fullName,
      email,
      phone,
      arrivalDate,
      departureDate,
      arrivalFormatted,
      departureFormatted,
      guests,
      tentType,
      interests,
      hearAbout,
      reservationCode,
      pageUrl,
    };

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Isla Aguada Glamping Co. <onboarding@resend.dev>';

    const adminPayload = {
      from: fromEmail,
      to: [ADMIN_EMAIL],
      cc: [ADMIN_CC],
      subject: `Reservation enquiry from ${fullName}`,
      html: buildAdminEmailHtml(details),
      text: buildPlainText(details),
      replyTo: email,
      headers: {
        'X-Reservation-Code': reservationCode,
      },
    };

    const guestPayload = {
      from: fromEmail,
      to: [email],
      subject: `Your Isla Aguada Glamping Co. reservation enquiry: ${reservationCode}`,
      html: buildGuestEmailHtml(details),
      text: buildPlainText(details),
      replyTo: ADMIN_EMAIL,
      headers: {
        'X-Reservation-Code': reservationCode,
      },
    };

    await sendResendEmail(adminPayload);
    await sendResendEmail(guestPayload);

    return res.status(200).json({
      ok: true,
      reservationCode,
      email,
    });
  } catch (error) {
    console.error('Reservation API error:', error);
    return res.status(500).json({
      ok: false,
      error: error.message || 'Unable to send reservation email.',
    });
  }
}
