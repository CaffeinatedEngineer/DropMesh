const capabilities = [
  {
    number: "01",
    title: "One codebase, every screen",
    body: "Flutter powers Windows, Android, iOS, and macOS builds while platform integrations handle filesystem access and native notifications.",
  },
  {
    number: "02",
    title: "Discovery that feels instant",
    body: "LAN device discovery pairs peers quickly, then keeps state visible as devices join, leave, reconnect, and resume work.",
  },
  {
    number: "03",
    title: "Reliable large-file movement",
    body: "WebSockets, chunked transfer, progress tracking, retry handling, and resumable uploads keep big transfers practical.",
  },
];

const stack = ["Flutter", "Dart", "Node.js", "WebSockets", "SQLite", "GitHub Actions"];

const metrics = [
  ["004", "Target platforms"],
  ["LAN", "Local-first transfer"],
  ["SQL", "Offline queue"],
  ["CI", "Automated builds"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="DropMesh home">
          <span>000</span>
          <strong>DropMesh</strong>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#system">01 System</a>
          <a href="#engine">02 Engine</a>
          <a href="#sync">03 Sync</a>
          <a href="#download">04 Download</a>
        </nav>
      </header>

      <section className="hero section-grid" id="home">
        <div className="section-kicker">01 / hero</div>
        <div className="hero-copy">
          <p className="eyebrow">Cross-platform local file transfer</p>
          <h1>Move files across your devices without waiting on the cloud.</h1>
          <p className="hero-text">
            DropMesh is a fast, offline-first transfer app for nearby devices,
            engineered with a shared Flutter codebase and a resilient LAN
            transfer engine.
          </p>
        </div>
        <div className="hero-panel" aria-label="DropMesh transfer visualization">
          <div className="mesh-orbit">
            <span className="node node-a">Win</span>
            <span className="node node-b">iOS</span>
            <span className="node node-c">macOS</span>
            <span className="node node-d">Android</span>
            <span className="core-node">DropMesh</span>
          </div>
          <div className="transfer-strip">
            <span>chunk_024.bin</span>
            <span>84%</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Technology stack">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section-grid stats-section" id="system">
        <div className="section-kicker">02 / system</div>
        <div className="section-heading">
          <h2>A transfer layer built for real devices, not perfect networks.</h2>
          <p>
            DropMesh treats the local network as the primary path and stores
            transfer intent locally, so sessions can recover cleanly when
            devices disconnect or files are interrupted.
          </p>
        </div>
        <div className="metrics-grid">
          {metrics.map(([value, label]) => (
            <div className="metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-list" id="engine">
        {capabilities.map((feature) => (
          <article className="feature-row" key={feature.number}>
            <span className="feature-number">{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>

      <section className="section-grid architecture" id="sync">
        <div className="section-kicker">03 / sync</div>
        <div className="section-heading">
          <h2>Offline-first queues keep every transfer accountable.</h2>
          <p>
            SQLite-backed transfer queues track pending, active, failed, and
            resumed jobs. Device state management keeps connected peers in sync,
            while conflict-aware rules protect files when updates race.
          </p>
        </div>
        <div className="flow-board" aria-label="DropMesh architecture flow">
          <div>Device discovery</div>
          <span />
          <div>WebSocket session</div>
          <span />
          <div>Chunked transfer</div>
          <span />
          <div>SQLite queue</div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-kicker">04 / why it matters</div>
        <div className="why-grid">
          <article>
            <span>Reason 1</span>
            <h3>No cloud round trip</h3>
            <p>
              Nearby devices exchange files directly over LAN, reducing upload
              delays and avoiding unnecessary remote storage hops.
            </p>
          </article>
          <article>
            <span>Reason 2</span>
            <h3>Designed for interruption</h3>
            <p>
              Progress tracking, retry handling, and resumable uploads turn weak
              local conditions into recoverable events.
            </p>
          </article>
          <article>
            <span>Reason 3</span>
            <h3>Built to ship cleanly</h3>
            <p>
              GitHub Actions supports repeatable builds and release confidence
              across the desktop and mobile targets.
            </p>
          </article>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-copy">
          <span className="section-kicker">05 / download</span>
          <h2>DropMesh will be ready to download here.</h2>
          <p>
            
          </p>
        </div>
        <a className="download-button" href="" aria-label="Download DropMesh">
          Download
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>Shashank Jha</strong>
          <p>Cross-platform app engineering and realtime systems.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:shashankshiv.jha@gmail.com">shashankshiv.jha@gmail.com</a>
          <a href="https://shashank04.netlify.app/">Portfolio</a>
          <a href="https://www.linkedin.com/in/shashank-jha-981858266/">LinkedIn</a>
          <a href="https://github.com/CaffeinatedEngineer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
