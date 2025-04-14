export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>🔑 Basit Key Sistemi</h1>
      <p>
        Bu sistem IP'ye göre key üretir. Key 1 dakika geçerli olur. Aşağıdaki adımları takip et:
      </p>
      <ol>
        <li><a href="/api/generate" target="_blank">/api/generate</a> ile key oluştur</li>
        <li><a href="/api/validate" target="_blank">/api/validate</a> ile key doğrula</li>
      </ol>
    </div>
  );
}
