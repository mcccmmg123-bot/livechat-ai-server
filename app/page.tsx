export default function Home() {
  return (
    <main style={{ fontFamily: 'monospace', padding: '2rem' }}>
      <h1>Livechat AI Server</h1>
      <p>Status: <strong>running</strong></p>
      <p>Endpoint: <code>POST /api/livechat-ai</code></p>
      <p>Body: <code>{`{ "message": "customer message here" }`}</code></p>
      <p>Returns: <code>emotion, intent, strategy, replies[3]</code></p>
    </main>
  )
}
