'use client';

import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  console.log("URL BE:", `${process.env.NEXT_PUBLIC_API_URL}`)

  useEffect(() => {
    // const apiUrl = "http://backend-service.myapp.svc.cluster.local:8080"; 
    fetch(`http://backend-service.myapp.svc.cluster.local:8080/api`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Next.js Frontend</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}
