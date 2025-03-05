import Head from "next/head";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review:
      "Dr. Jane Smith is an amazing doctor! She listens carefully and provides excellent advice. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    rating: 4,
    review:
      "Great experience overall. Dr. Jane was very professional and explained everything well. Just a bit of a wait time.",
  },
  {
    name: "Michael Brown",
    rating: 5,
    review:
      "One of the best doctors I've visited. She was very thorough and made sure I understood my condition completely.",
  },
  {
    name: "Sophia Wilson",
    rating: 3,
    review:
      "Dr. Jane was knowledgeable, but I felt the consultation was a bit rushed. Would appreciate more time for questions.",
  },
];

const ReviewBlock = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Compassionate Children's Therapy",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <>
    <Head>
        <title>Client Testimonials | Happy Families & Successful Therapy</title>
        <meta name="description" content="Read testimonials from parents and families who have seen positive changes through our children's therapy services." />
        <meta property="og:title" content="Client Testimonials | Happy Families & Successful Therapy" />
        <meta property="og:description" content="See how our therapy services have helped children and their families." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "20px",
        maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Patient Name */}
      <div style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
        John Doe
      </div>

      {/* Doctor Name */}
      <div style={{ fontSize: "16px", color: "#555", marginTop: "5px" }}>
        Reviewed Dr. Jane Smith
      </div>

      {/* Star Rating */}
      <div style={{ marginTop: "10px" }}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{
              color: index < 4 ? "#ffd700" : "#ccc", // 4 out of 5 stars are filled
              fontSize: "24px",
              marginRight: "5px",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Description */}
      <div
        style={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#666",
          lineHeight: "1.5",
        }}
      >
        Dr. Jane Smith provided excellent care during my visit. She was very
        thorough and took the time to explain everything clearly. Highly
        recommend!
      </div>
    </div>
    </>
  );
};

export default ReviewBlock;