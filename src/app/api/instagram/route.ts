import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  
  // Ambil parameter `limit` dari query string
  const url = new URL(req.url);
  const limit = url.searchParams.get('limit') || '25'; // Default ke 25 jika tidak ada parameter

  // Buat URL API dengan parameter `limit`
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}&limit=${limit}`;

  try {
    const response = await axios.get(apiUrl);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 500 });
  }
}
