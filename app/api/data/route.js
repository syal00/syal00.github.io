import { NextResponse } from 'next/server';

// Simple health/sample endpoint - no secrets
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
  });
}
