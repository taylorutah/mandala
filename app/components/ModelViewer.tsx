"use client";

export default function ModelViewer() {
  return (
    <div className="flex justify-center py-12 bg-gray-50 dark:bg-gray-900">
      <model-viewer
        src="/models/napco-pump.glb"
        alt="NAPCO Rotary Gear Pump 3D Model"
        auto-rotate
        camera-controls
        rotation-per-second="15deg"
        shadow-intensity="0.9"
        exposure="1.1"
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "60vh",
          maxHeight: "600px",
          borderRadius: "12px",
          background:
            "radial-gradient(circle at center, #f9fafb 0%, #e5e7eb 100%)",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)",
        }}
      ></model-viewer>
    </div>
  );
}