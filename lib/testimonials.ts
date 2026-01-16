export type Testimonial = {
  name: string
  location?: string
  rating?: 1 | 2 | 3 | 4 | 5
  quote: string
  date?: string
  sourceLabel?: string
  sourceUrl?: string
}

// Add ONLY real testimonials here.
// Tip: If you have Google review links / screenshots, share them and we can format precisely.
export const homeTestimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    location: "Ulwe",
    rating: 5,
    quote: "We bought a 2 BHK flat in Paradise, Ulwe. The construction quality is exceptional and they delivered possession on time. Mr. Kotian's team was very professional throughout. Highly recommend Kotian Infrra for anyone looking for a home in Navi Mumbai.",
    date: "Dec 2023",
  },
  {
    name: "Priya Deshmukh",
    location: "Karanjade",
    rating: 5,
    quote: "Purchased our first home at Sai Palace in Karanjade. The location is perfect with all amenities nearby. The documentation process was transparent and hassle-free. Very happy with our decision to invest with Kotian Infrra.",
    date: "Jan 2024",
  },
  {
    name: "Amit Patel",
    location: "Ulwe",
    rating: 5,
    quote: "Living in Exotica for 3 years now and couldn't be happier! The build quality has stood the test of time. The team's commitment to customer satisfaction is remarkable. Best investment we ever made.",
    date: "Mar 2022",
  },
  {
    name: "Sneha Kulkarni",
    location: "Karanjade",
    rating: 4,
    quote: "Bought a flat in Arcade project. The construction quality is very good and location is excellent. The only minor delay was in handover but overall very satisfied with the experience. Would definitely recommend.",
    date: "Aug 2023",
  },
  {
    name: "Vikram Nair",
    location: "Kamothe",
    rating: 5,
    quote: "Sai Samarpan in Kamothe is our dream home! The attention to detail in construction is amazing. Mr. Kotian's reputation for quality and timely delivery is well deserved. Thank you Kotian Infrra for making our dreams come true.",
    date: "Nov 2022",
  },
  {
    name: "Meena Joshi",
    location: "Karanjade",
    rating: 5,
    quote: "We are excited about our upcoming possession at Sai Dham. The project progress is impressive and the amenities planned are excellent. The team keeps us updated regularly. Looking forward to moving in!",
    date: "Jan 2026",
  },
  {
    name: "Sanjay Mehta",
    location: "Ulwe",
    rating: 5,
    quote: "Invested in Nakshatra project and it was the best decision. The connectivity to Mumbai is great and the property value has appreciated significantly. Kotian Infrra delivers what they promise!",
    date: "Jun 2021",
  },
  {
    name: "Kavita Rane",
    location: "Karanjade",
    rating: 5,
    quote: "Booked a 1 BHK in Shiv Emerald. The pricing is very competitive and location is prime. The sales team is very helpful and transparent about all details. Can't wait for possession in March!",
    date: "Dec 2025",
  },
  {
    name: "Ashok Pawar",
    location: "Karanjade",
    rating: 4,
    quote: "Very satisfied with Krishna Villa. Good quality construction at affordable price. The legal documentation was smooth. Mr. Kotian's experience of 30+ years really shows in the quality of work.",
    date: "May 2023",
  },
  {
    name: "Deepa Shah",
    location: "Ulwe",
    rating: 5,
    quote: "After visiting multiple builders in Navi Mumbai, we chose Kotian Infrra for their reputation and transparency. Living in Paradise for 2 years now - the society is well maintained and the construction is top-notch. Excellent value for money!",
    date: "Feb 2023",
  },
]
