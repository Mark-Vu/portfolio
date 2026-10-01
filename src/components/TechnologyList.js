const technologyColors = {
    "API Gateway": { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    "API testing": { color: "#0f766e", background: "#f0fdfa", border: "#5eead4" },
    "ASP.NET": { color: "#512bd4", background: "#f3efff", border: "#c4b5fd" },
    AWS: { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    "AWS Lambda": { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    "Azure Functions": { color: "#0067b8", background: "#eff6ff", border: "#93c5fd" },
    Cypress: { color: "#147d64", background: "#ecfdf5", border: "#6ee7b7" },
    Datadog: { color: "#632ca6", background: "#faf5ff", border: "#d8b4fe" },
    Docker: { color: "#086dd7", background: "#eef7ff", border: "#93c5fd" },
    ECS: { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    ElevenLabs: { color: "#111111", background: "#ffffff", border: "#9ca3af" },
    Gemini: { color: "#2563eb", background: "#eff6ff", border: "#93c5fd" },
    GKE: { color: "#326ce5", background: "#eff6ff", border: "#93c5fd" },
    "GitHub Actions": { color: "#0969da", background: "#eff6ff", border: "#93c5fd" },
    "GitLab CI/CD": { color: "#c2410c", background: "#fff7ed", border: "#fdba74" },
    Glue: { color: "#c2410c", background: "#fff7ed", border: "#fdba74" },
    Go: { color: "#007d9c", background: "#ecfeff", border: "#67e8f9" },
    Grafana: { color: "#c2410c", background: "#fff7ed", border: "#fdba74" },
    Jaeger: { color: "#b4237a", background: "#fdf2f8", border: "#f9a8d4" },
    Java: { color: "#217346", background: "#ecfdf5", border: "#86efac" },
    Kubernetes: { color: "#2852a5", background: "#eff6ff", border: "#93c5fd" },
    "Next.js": { color: "#111111", background: "#ffffff", border: "#9ca3af" },
    "Pixi.js": { color: "#c026d3", background: "#fdf4ff", border: "#f0abfc" },
    PostgreSQL: { color: "#336791", background: "#eff6ff", border: "#93c5fd" },
    React: { color: "#087ea4", background: "#ecfeff", border: "#67e8f9" },
    S3: { color: "#15803d", background: "#f0fdf4", border: "#86efac" },
    "Service Bus": { color: "#0067b8", background: "#eff6ff", border: "#93c5fd" },
    "Spring Boot": { color: "#2f855a", background: "#f0fdf4", border: "#86efac" },
    Stripe: { color: "#635bff", background: "#f5f3ff", border: "#c4b5fd" },
    Supabase: { color: "#167a55", background: "#ecfdf5", border: "#6ee7b7" },
    Terraform: { color: "#654ff0", background: "#f5f3ff", border: "#c4b5fd" },
    Tilt: { color: "#c02648", background: "#fff1f2", border: "#fda4af" },
    TypeScript: { color: "#2563eb", background: "#eff6ff", border: "#93c5fd" },
    "Web Bluetooth": { color: "#155eae", background: "#eff6ff", border: "#93c5fd" },
};

const fallbackColor = { color: "#7c3aed", background: "#f5f3ff", border: "#c4b5fd" };

export default function TechnologyList({ technologies, context }) {
    return (
        <div className="technology-stack" aria-label={`Technologies used for ${context}`}>
            <span className="technology-stack-label">Tech</span>
            <ul className="technology-list">
                {technologies.map((technology) => (
                    <li key={technology} className="technology-badge" style={technologyColors[technology] ?? fallbackColor}>
                        {technology}
                    </li>
                ))}
            </ul>
        </div>
    );
}
