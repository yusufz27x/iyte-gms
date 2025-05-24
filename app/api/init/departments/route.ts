import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('Fetching departments from database...');
    const departments = await prisma.department.findMany({
      include: {
        Faculty: true,
      },
    });
    console.log(`Found ${departments.length} departments in database`);
    
    const response = NextResponse.json(departments, { status: 200 });
    
    // Disable caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json({ error: 'Failed to fetch departments' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
