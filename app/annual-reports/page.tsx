"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart, Users, Building2 } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AnnualReportsPage() {
  const heroRef = useRef(null)
  const reportsRef = useRef(null)
  const highlightsRef = useRef(null)
  const overviewRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const reportsInView = useInView(reportsRef, { once: true })
  const highlightsInView = useInView(highlightsRef, { once: true })
  const overviewInView = useInView(overviewRef, { once: true })

  const reports = [
    {
      title: "Amendment in Laws JAN 2020",
      description: "Legal amendments and regulatory updates effective from January 2020",
      filePath: "/Annual Reports/ammendmentlaws.pdf",
      isLatest: false,
    },
    {
      title: "AGM Notice",
      description: "Annual General Meeting notice with agenda and important information for members",
      filePath: "/Annual Reports/AGM-NOTICE.jpg",
      isLatest: true,
    },
    {
      title: "Balance Sheet 2019",
      description: "Comprehensive financial statements and balance sheet for the year 2019",
      filePath: "/Annual Reports/Balance Sheet March 2019.pdf",
      isLatest: false,
    },
  ]

  const highlights = [
    {
      icon: Users,
      title: "Member Growth",
      value: "9,076+",
      description: "Active members as of March 2019",
    },
    {
      icon: TrendingUp,
      title: "Share Capital",
      value: "₹409.96L",
      description: "Total share capital accumulated",
    },
    {
      icon: Building2,
      title: "Branch Network",
      value: "5",
      description: "Branches across Nagpur",
    },
    {
      icon: Calendar,
      title: "Years of Service",
      value: "40+",
      description: "Serving the community since 1984",
    },
  ]

  return (
    <div className="min-h-screen bg-[#ffffff] relative noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden" style={{
        minHeight: "91vh",
        paddingTop: "127px",
        paddingBottom: "89px",
      }}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute rounded-full opacity-30"
            style={{
              top: "89px",
              left: "43px",
              width: "134px",
              height: "134px",
              background: "linear-gradient(127deg, #e7d8c5 0%, #b6afa4 100%)",
              transform: "rotate(-11deg)",
            }}
          />
          <div
            className="absolute opacity-25 organic-shape-1"
            style={{
              top: "267px",
              right: "67px",
              width: "89px",
              height: "89px",
              background: "#b6afa4",
              transform: "rotate(17deg)",
            }}
          />
          <div
            className="absolute rounded-full opacity-20"
            style={{
              bottom: "123px",
              left: "29%",
              width: "156px",
              height: "156px",
              background: "linear-gradient(113deg, #e7d8c5 0%, #b6afa4 100%)",
              transform: "rotate(-7deg)",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 67 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -13 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.517, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="mb-11 slightly-off-1"
            >
              <div className="mb-7">
                <FileText 
                  className="text-[#7d7d7d] mx-auto" 
                  style={{ 
                    fontSize: "67px",
                    width: "67px",
                    height: "67px"
                  }} 
                />
              </div>
            </motion.div>

            <h1
              className="font-bold text-[#141414] mb-9 leading-tight"
              style={{
                fontSize: "clamp(37px, 5.2vw, 67px)",
                fontWeight: 725,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Annual{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #7d7d7d 0%, #141414 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reports
              </span>
            </h1>
            <p
              className="text-[#7d7d7d] mb-11 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: "21px",
                lineHeight: 1.7,
                letterSpacing: "0.003em",
              }}
            >
              Access our comprehensive annual reports showcasing financial performance, strategic initiatives, and
              commitment to transparency and accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section ref={highlightsRef} className="bg-[#ffffff] relative overflow-hidden" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-19"
            style={{ marginBottom: "67px" }}
          >
            <h2
              className="font-bold text-[#141414] mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Key{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #7d7d7d 0%, #141414 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Highlights
              </span>
            </h2>
            <p
              className="text-[#7d7d7d] max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Financial milestones and achievements that reflect our growth and commitment to excellence
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.517,
                  delay: index * 0.067,
                  ease: [0.43, 0.195, 0.02, 1.01],
                }}
                whileHover={{
                  y: -3,
                  rotate: index % 2 === 0 ? 0.3 : -0.3,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic text-center ${index === 1 ? "slightly-off-3" : ""} ${index === 2 ? "slightly-off-4" : ""}`}
              >
                <div style={{ padding: "29px 23px 31px 23px" }}>
                  <div className="mb-7">
                    <highlight.icon 
                      className="text-[#7d7d7d] mx-auto" 
                      style={{ 
                        fontSize: "48px",
                        width: "48px",
                        height: "48px"
                      }} 
                    />
                  </div>
                  <div
                    className="font-bold text-[#141414] mb-3"
                    style={{
                      fontSize: "37px",
                      fontWeight: 725,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {highlight.value}
                  </div>
                  <h3
                    className="font-bold text-[#141414] mb-3"
                    style={{
                      fontSize: "19px",
                      fontWeight: 525,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {highlight.title}
                  </h3>
                  <p
                    className="text-[#7d7d7d]"
                    style={{
                      fontSize: "15px",
                      fontWeight: 425,
                      lineHeight: 1.5,
                    }}
                  >
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section ref={reportsRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(127deg, #e7d8c5 0%, #b6afa4 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={reportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-19"
            style={{ marginBottom: "67px" }}
          >
            <h2
              className="font-bold text-[#141414] mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Download{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #7d7d7d 0%, #141414 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reports
              </span>
            </h2>
            <p
              className="text-[#7d7d7d] max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Access our annual reports to understand our financial performance and strategic direction
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={reportsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.517,
                  delay: index * 0.067,
                  ease: [0.43, 0.195, 0.02, 1.01],
                }}
                whileHover={{
                  y: -3,
                  rotate: index % 2 === 0 ? 0.3 : -0.3,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic ${report.isLatest ? "bg-gradient-to-br from-[#e7d8c5] to-white" : "bg-white"} ${index === 1 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div>
                        <FileText 
                          className="text-[#7d7d7d]" 
                          style={{ 
                            fontSize: "29px",
                            width: "29px",
                            height: "29px"
                          }} 
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-[#141414]"
                          style={{
                            fontSize: "19px",
                            fontWeight: 525,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {report.title}
                        </h3>

                      </div>
                    </div>
                    {report.isLatest && (
                      <span
                        className="px-3 py-1 bg-[#7d7d7d] text-white text-sm font-medium rounded-full"
                        style={{
                          fontSize: "13px",
                          fontWeight: 525,
                          padding: "3px 11px 5px 11px",
                          borderRadius: "19px",
                        }}
                      >
                        Latest
                      </span>
                    )}
                  </div>

                  <p
                    className="text-[#7d7d7d] mb-6 leading-relaxed"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {report.description}
                  </p>



                  <a
                    href={report.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(113deg, #7d7d7d 0%, #141414 100%)",
                      fontSize: "17px",
                      fontWeight: 525,
                      padding: "11px 29px 13px 29px",
                      borderRadius: "11px",
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Overview Section */}
      <section ref={overviewRef} className="bg-[#ffffff]" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-19"
            style={{ marginBottom: "67px" }}
          >
            <h2
              className="font-bold text-[#141414] mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Financial{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #7d7d7d 0%, #141414 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Overview
              </span>
            </h2>
            <p
              className="text-[#7d7d7d] max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Understanding our financial health and performance metrics
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -67 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <h3
                className="font-bold text-[#141414] mb-7"
                style={{
                  fontSize: "23px",
                  fontWeight: 625,
                  letterSpacing: "-0.01em",
                }}
              >
                What's Inside Our Reports
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Financial Statements", desc: "Comprehensive balance sheets, profit & loss statements, and cash flow analysis" },
                  { title: "Performance Analysis", desc: "Detailed analysis of key performance indicators and growth metrics" },
                  { title: "Strategic Initiatives", desc: "Overview of new products, services, and expansion plans" },
                  { title: "Risk Management", desc: "Assessment of risks and mitigation strategies implemented" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full flex items-center justify-center font-bold"
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "linear-gradient(113deg, #7d7d7d 0%, #141414 100%)",
                        fontSize: "15px",
                        fontWeight: 625,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-[#141414] mb-2"
                        style={{
                          fontSize: "19px",
                          fontWeight: 525,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-[#7d7d7d]"
                        style={{
                          fontSize: "17px",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="relative"
            >
              <div
                className="text-[#ffffff] relative overflow-hidden"
                style={{
                  background: "linear-gradient(113deg, #7d7d7d 0%, #141414 100%)",
                  padding: "37px 43px 39px 43px",
                  borderRadius: "19px",
                  transform: "rotate(-0.7deg)",
                }}
              >
                <h3
                  className="font-bold mb-7"
                  style={{
                    fontSize: "23px",
                    fontWeight: 625,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Transparency & Accountability
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Regulatory Compliance", desc: "All reports comply with RBI and regulatory requirements" },
                    { title: "Audited Statements", desc: "Independently audited financial statements" },
                    { title: "Member Access", desc: "Easy access for all members and stakeholders" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className="bg-[#ffffff] bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                        style={{
                          width: "7px",
                          height: "7px",
                        }}
                      >
                        <div
                          className="bg-[#ffffff] rounded-full"
                          style={{
                            width: "2px",
                            height: "2px",
                          }}
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{
                            fontSize: "17px",
                            fontWeight: 525,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-[#e7d8c5]"
                          style={{
                            fontSize: "15px",
                            lineHeight: 1.6,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}