export async function GET() {
  try {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

    if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
      return Response.json(
        { error: 'YouTube API configuration missing' },
        { status: 500 }
      )
    }

    // Fetch uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    )
    const channelData = await channelResponse.json()

    if (!channelData.items?.[0]) {
      return Response.json(
        { error: 'Channel not found' },
        { status: 404 }
      )
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // Fetch latest videos from uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=12&key=${YOUTUBE_API_KEY}`
    )
    const videosData = await videosResponse.json()

    const videos = videosData.items?.map((item: any) => ({
      id: item.contentDetails.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      channelName: item.snippet.channelTitle,
    })) || []

    return Response.json({ videos })
  } catch (error) {
    console.error('YouTube API error:', error)
    return Response.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    )
  }
}
