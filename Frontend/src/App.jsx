import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult("");
    setConfidence(0);
  };

  const detectDeepfake = async () => {
    if (!file) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.result);
      setConfidence(Math.round(data.confidence * 100));
    } catch (error) {
      setResult("Backend not running");
    }

    setLoading(false);
  };

 return (
  <div className="page">
    <h1 className="title">AI Deepfake Detector</h1>
    <p className="subtitle">
      Verify whether an image is real or AI‑manipulated
    </p>

    <input type="file" accept="image/*" onChange={handleFileChange} />

    {preview && (
      <img src={preview} alt="preview" className="preview" />
    )}

    <button onClick={detectDeepfake} disabled={loading}>
      {loading ? "Analyzing..." : "Detect Image"}
    </button>

    {result && (
      <div className="output">
        <p className={`result ${result.toLowerCase()}`}>
          Result: <strong>{result}</strong>
        </p>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>

        <p className="confidence">Confidence: {confidence}%</p>
      </div>
    )}
  </div>
);

}

export default App;
