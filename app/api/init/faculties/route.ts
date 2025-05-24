import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('Fetching faculties from database...');
    const faculties = await prisma.faculty.findMany();
    console.log(`Found ${faculties.length} faculties in database`);
    
    const response = NextResponse.json(faculties, { status: 200 });
    
    // Disable caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error fetching faculties:', error);
    return NextResponse.json({ error: 'Failed to fetch faculties' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
