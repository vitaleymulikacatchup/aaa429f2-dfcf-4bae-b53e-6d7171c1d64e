"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Code, DollarSign, HelpCircle, MessageCircle, Quote, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="DialedWeb Logo"
          brandName="DialedWeb"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Web Design That Converts"
          description="Transform your business with stunning, high-converting websites that drive results and captivate your audience"
          tag="Web Design Agency"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "https://dialedweb.com/portfolio"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8534173/pexels-photo-8534173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern web design workspace with multiple screens"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive web design solutions tailored to your business needs"
          tag="Services"
          tagIcon={Code}
          features={[
            {
              id: "01",
              title: "Responsive Design",
              description: "Beautiful websites that work perfectly on all devices and screen sizes",
              imageSrc: "https://images.pexels.com/photos/20555791/pexels-photo-20555791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Responsive web design mockup"
            },
            {
              id: "02",
              title: "SEO Optimization",
              description: "Built-in SEO best practices to help your website rank higher in search results",
              imageSrc: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "SEO analytics dashboard"
            },
            {
              id: "03",
              title: "E-commerce Solutions",
              description: "Complete online stores with secure payment processing and inventory management",
              imageSrc: "https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ecommerce website interface"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Plan"
          description="Flexible pricing options designed to fit businesses of all sizes"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              price: "$2,499",
              name: "Starter Website",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#features"
                }
              ],
              features: [
                "5-page custom website",
                "Mobile responsive design",
                "Basic SEO setup",
                "Contact form integration",
                "3 months support"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$4,999",
              name: "Business Website",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Schedule Call",
                  href: "https://calendly.com/dialedweb"
                }
              ],
              features: [
                "10-page custom website",
                "Advanced SEO optimization",
                "Content management system",
                "Analytics integration",
                "6 months support",
                "Social media integration"
              ]
            },
            {
              id: "enterprise",
              price: "$9,999+",
              name: "Enterprise Solution",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "View Features",
                  href: "#features"
                }
              ],
              features: [
                "Unlimited pages",
                "E-commerce functionality",
                "Custom integrations",
                "Priority support",
                "1 year maintenance",
                "Performance optimization"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform their online presence"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechStart Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7006136/pexels-photo-7006136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder",
              company: "Digital Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7970823/pexels-photo-7970823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our web design services"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How long does it take to build a website?",
              content: "Most websites are completed within 2-6 weeks, depending on complexity and features required. We'll provide a detailed timeline during our initial consultation."
            },
            {
              id: "2",
              title: "Do you provide ongoing maintenance?",
              content: "Yes, all our packages include ongoing support and maintenance. We handle updates, security, backups, and any technical issues that may arise."
            },
            {
              id: "3",
              title: "Will my website be mobile-friendly?",
              content: "Absolutely! All our websites are built with responsive design, ensuring they look and function perfectly on all devices including phones, tablets, and desktops."
            },
            {
              id: "4",
              title: "Can I update the content myself?",
              content: "Yes, we build websites with user-friendly content management systems that allow you to easily update text, images, and other content without technical knowledge."
            },
            {
              id: "5",
              title: "What's included in the SEO optimization?",
              content: "Our SEO includes keyword research, meta tags optimization, site structure optimization, page speed optimization, and Google Analytics setup to help your site rank better."
            },
            {
              id: "6",
              title: "Do you offer e-commerce solutions?",
              content: "Yes, we specialize in building custom e-commerce websites with secure payment processing, inventory management, and all the features needed to sell online successfully."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Business?"
          description="Let's discuss your project and create a website that drives real results for your business."
          tagIcon={MessageCircle}
          inputPlaceholder="Enter your email address"
          buttonText="Start Project"
          termsText="By starting a project, you agree to our terms of service and privacy policy."
          imageSrc="https://images.pexels.com/photos/1181461/pexels-photo-1181461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Web development team collaboration"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="DialedWeb"
          columns={[
            {
              items: [
                {
                  label: "Services",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Portfolio",
                  href: "https://dialedweb.com/portfolio"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "https://dialedweb.com/about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Blog",
                  href: "https://dialedweb.com/blog"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://dialedweb.com/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "https://dialedweb.com/terms"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}