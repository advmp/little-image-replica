export function FlowDiagram() {
  return <figure className="diagram">
    <svg viewBox="0 0 660 330" role="img" aria-labelledby="flow-title flow-description">
      <title id="flow-title">All-iron flow battery schematic</title>
      <desc id="flow-description">Two electrolyte tanks circulate iron-based electrolyte through pumps to a cell stack. The stack connects to the electrical circuit.</desc>
      <defs><marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs>
      <g fill="none" strokeWidth="2">
        <path className="flow-line" d="M130 180 H80 V70 H277 V130" markerEnd="url(#flow-arrow)" />
        <path className="flow-line" d="M277 210 V265 H185 V222" markerEnd="url(#flow-arrow)" />
        <path className="flow-line" d="M530 180 H580 V70 H383 V130" markerEnd="url(#flow-arrow)" />
        <path className="flow-line" d="M383 210 V265 H475 V222" markerEnd="url(#flow-arrow)" />
        <rect className="tank" x="115" y="130" width="100" height="95" rx="6" />
        <rect className="tank-fill" x="116" y="160" width="98" height="64" rx="5" stroke="none" />
        <rect className="tank" x="445" y="130" width="100" height="95" rx="6" />
        <rect className="tank-fill" x="446" y="160" width="98" height="64" rx="5" stroke="none" />
        <rect className="tank" x="265" y="125" width="130" height="95" rx="4" />
        {[285, 300, 315, 330, 345, 360, 375].map(x => <path key={x} d={`M${x} 134 V211`} stroke="currentColor" opacity=".35" />)}
        <circle className="tank" cx="150" cy="70" r="15" /><path d="m145 63 10 7-10 7z" className="flow-line" />
        <circle className="tank" cx="510" cy="70" r="15" /><path d="m515 63-10 7 10 7z" className="flow-line" />
        <path d="M330 125 V36 H395" stroke="currentColor" markerEnd="url(#flow-arrow)" />
      </g>
      <text x="330" y="108" textAnchor="middle">Cell stack</text>
      <text x="165" y="249" textAnchor="middle">Electrolyte tank</text><text x="495" y="249" textAnchor="middle">Electrolyte tank</text>
      <text x="150" y="40" textAnchor="middle">Pump</text><text x="510" y="40" textAnchor="middle">Pump</text>
      <text x="350" y="20">Electrical circuit</text>
      <text x="330" y="310" textAnchor="middle">Iron-based electrolyte circulation</text>
    </svg>
    <figcaption className="mt-2 text-center text-xs text-muted-foreground">Functional schematic · not a proprietary circuit diagram</figcaption>
  </figure>;
}
