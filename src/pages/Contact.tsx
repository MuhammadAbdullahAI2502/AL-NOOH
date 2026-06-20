import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Mic } from "lucide-react";
import { useState } from "react";
import { useSEO } from "../hooks/useSEO";

interface ContactProps {
  lang: "en" | "ar";
}

const BUSINESS_TYPES = ["Restaurant", "Hotel", "Importer", "Wholesaler", "Distributor", "Individual Buyer", "Other"];

export default function Contact({ lang }: ContactProps) {
  useSEO(
    "Contact Us — Get a Livestock & Meat Supply Quote | Al Nooh",
    "Get in touch with Al Nooh for livestock export inquiries or restaurant meat supply quotes. Reach us by phone, email, WhatsApp, or our AI voice agent."
  );
  const isAr = lang === "ar";
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: isAr ? "الهاتف" : "Phone",
      value: "+971 50 000 0000",
      link: "tel:+971500000000",
    },
    {
      icon: Mail,
      title: isAr ? "البريد الإلكتروني" : "Email",
      value: "info@alnooh.com",
      link: "mailto:info@alnooh.com",
    },
    {
      icon: MapPin,
      title: isAr ? "العنوان" : "Address",
      value: isAr ? "دبي، الإمارات العربية المتحدة" : "Dubai, United Arab Emirates",
      link: "https://wa.me/971500000000",
    },
    {
      icon: MessageSquare,
      title: isAr ? "واتسآب" : "WhatsApp",
      value: "+971 50 000 0000",
      link: "https://wa.me/971500000000",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `New Website Inquiry\n\nName: ${formData.name || "-"}\nBusiness Type: ${formData.businessType || "-"}\nCountry: ${formData.country || "-"}\nEmail: ${formData.email || "-"}\nPhone: ${formData.phone || "-"}\nProduct(s) Required: ${formData.product || "-"}\nQuantity: ${formData.quantity || "-"}\n\nMessage:\n${formData.message || "-"}`
    );
    window.open(`https://wa.me/971500000000?text=${text}`, "_blank", "noopener,noreferrer");
    setFormData({ name: "", businessType: "", country: "", email: "", phone: "", product: "", quantity: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream via-brand-cream to-brand-green-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-40 pb-12 md:pt-48 md:pb-20 overflow-hidden">
        <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-brand-gold-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-500/15 border border-brand-gold-400/50 mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold-500"></span>
            <span className="text-sm font-semibold text-brand-gold-600 tracking-wide uppercase">{isAr ? "اتصل بنا" : "Contact"}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-green-950 mb-6">
            {isAr ? "اتصل بنا" : "Get in Touch"}
          </h1>
          <p className="text-xl text-brand-green-700">
            {isAr
              ? "نحن هنا للإجابة على جميع أسئلتك حول الماشية والتصدير والشراكات."
              : "We're here to answer all your questions about livestock, export, and partnerships."}
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <Icon className="w-10 h-10 text-brand-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-brand-green-950 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-brand-green-700 break-all">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-green-950/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-brand-green-950 mb-8 text-center">
              {isAr ? "أرسل لنا رسالة" : "Send us a Message"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "الاسم" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    placeholder={isAr ? "أدخل اسمك" : "Your Name"}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "نوع النشاط التجاري" : "Business Type"}
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors bg-white"
                  >
                    <option value="">{isAr ? "اختر..." : "Select..."}</option>
                    {BUSINESS_TYPES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "رقم الهاتف / واتسآب" : "Phone / WhatsApp Number"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    placeholder="+971 50 000 0000"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-1"
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "الدولة" : "Country"}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    placeholder={isAr ? "بلد التسليم" : "Delivery Country"}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "المنتج المطلوب" : "Product Required"}
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    placeholder={isAr ? "مثال: أبقار، أغنام، لحم" : "e.g. Cattle, Sheep, Meat"}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-brand-green-950 mb-2">
                    {isAr ? "الكمية" : "Quantity"}
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    placeholder={isAr ? "مثال: ١٠٠ رأس" : "e.g. 100 head"}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-brand-green-950 mb-2">
                  {isAr ? "تفاصيل إضافية" : "Special Requirements / Message"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-brand-green-200 rounded-sm focus:outline-none focus:border-brand-gold-500 transition-colors resize-none"
                  placeholder={isAr ? "اكتب رسالتك هنا..." : "Write your message here..."}
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                type="submit"
                className="w-full bg-linear-to-r from-brand-gold-400 to-brand-gold-500 text-brand-green-950 font-semibold py-4 rounded-sm hover:from-brand-gold-500 hover:to-brand-gold-600 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isAr ? "أرسل عبر واتسآب" : "Send via WhatsApp"}
              </motion.button>
              <p className="text-center text-sm text-brand-ink-700/60 flex items-center justify-center gap-1.5">
                <Mic className="w-3.5 h-3.5" />
                {isAr
                  ? "أو اضغط على أيقونة المايكروفون أسفل الشاشة للتحدث مع وكيلنا الصوتي الذكي مباشرة."
                  : "Or tap the mic icon at the bottom of the screen to talk to our AI voice agent right now."}
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green-950 mb-8 text-center">
            {isAr ? "موقعنا" : "Our Location"}
          </h2>
          <div className="w-full h-80 bg-brand-green-950/10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3427.039795891672!2d72.26335477558312!3d30.801518274551125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ4JzA1LjUiTiA3MsKwMTUnNTcuNCJF!5e0!3m2!1sen!2s!4v1781968941945!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Business Hours & Response Time */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-green-950/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-brand-green-950 mb-6">
                {isAr ? "ساعات العمل" : "Business Hours"}
              </h3>
              <div className="space-y-3 text-brand-green-700">
                <p><span className="font-semibold">{isAr ? "الأحد - الخميس" : "Sun - Thu"}:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-semibold">{isAr ? "الجمعة" : "Friday"}: </span>{isAr ? "مغلق" : "Closed"}</p>
                <p><span className="font-semibold">{isAr ? "السبت" : "Saturday"}: </span>10:00 AM - 4:00 PM</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-brand-green-950 mb-6">
                {isAr ? "وقت الاستجابة" : "Response Time"}
              </h3>
              <div className="space-y-3 text-brand-green-700">
                <p><span className="font-semibold">{isAr ? "البريد الإلكتروني" : "Email"}: </span>{isAr ? "خلال 24 ساعة" : "Within 24 hours"}</p>
                <p><span className="font-semibold">WhatsApp: </span>{isAr ? "خلال ساعة واحدة" : "Within 1 hour"}</p>
                <p><span className="font-semibold">{isAr ? "الهاتف" : "Phone"}: </span>{isAr ? "فوري أثناء ساعات العمل" : "Immediate during business hours"}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green-950 mb-12 text-center">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>

          <div className="space-y-6">
            {[
              {
                q: isAr ? "كم تستغرق عملية التصدير؟" : "How long does the export process take?",
                a: isAr ? "عادة ما تستغرق العملية 3-5 أيام عمل من التأكيد إلى الشحن النهائي." : "Typically 3-5 business days from confirmation to final shipment."
              },
              {
                q: isAr ? "ما هي الدول التي تصدرون إليها؟" : "Which countries do you export to?",
                a: isAr ? "نصدر إلى أكثر من 16 دولة في الشرق الأوسط وآسيا وأفريقيا. اتصل بنا لمعرفة المزيد عن دولتك." : "We export to 16+ countries in the Middle East, Asia, and Africa. Contact us for specific availability."
              },
              {
                q: isAr ? "هل تقدمون خدمات الشحن؟" : "Do you provide shipping services?",
                a: isAr ? "نعم، نوفر خدمات شحن شاملة بما في ذلك التعبئة والتوثيق والنقل المباشر." : "Yes, we provide comprehensive shipping including packaging, documentation, and direct transport."
              },
              {
                q: isAr ? "ما هي ضمانات الجودة؟" : "What are your quality guarantees?",
                a: isAr ? "كل حيوان معتمد بيطرياً، مصرح به دولياً، و100% مطابق للمعايير المتفق عليها." : "Every animal is vet-certified, internationally approved, and 100% compliant with agreed standards."
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-gold-500"
              >
                <h3 className="font-bold text-brand-green-950 mb-3">{faq.q}</h3>
                <p className="text-brand-green-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
