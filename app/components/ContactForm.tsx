import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

const SERVICES = [
  "AI Automation",
  "Custom AI Development",
  "Agentic AI",
  "Data Analytics",
  "Web Development",
  "AI Consulting",
  "Other",
];

const BUDGETS = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Not sure yet",
];

interface ContactFormProps {
  variant?: "contact" | "careers";
}

export function ContactForm({ variant = "contact" }: ContactFormProps) {
  const isCareers = variant === "careers";
  const formName = isCareers ? "careers-application" : "contact";

  const [fields, setFields] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    position: "",
    portfolio: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResumeName(e.target.files?.[0]?.name ?? "");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const data = new FormData();
      data.append("form-name", formName);
      Object.entries(fields).forEach(([key, value]) => data.append(key, value));
      if (isCareers && fileInputRef.current?.files?.[0]) {
        data.append("resume", fileInputRef.current.files[0]);
      }
      await fetch("/__forms.html", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-white px-8 py-16 text-center"
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f8fa] text-[#1e8eab]">
          <CheckCircle2 size={30} />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-[#0b1f33]">
          Message sent.
        </h3>
        <p className="max-w-sm text-[#526575]">
          {isCareers
            ? "Thanks for applying — our team will review your application and be in touch soon."
            : "Thanks for reaching out. A member of our team will respond within one business day."}
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-[rgba(0,70,150,0.16)] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#a8bccb] transition-colors duration-200 focus:border-[#1e8eab] focus:outline-none focus:ring-2 focus:ring-[rgba(30,142,171,0.18)]";
  const labelClass = "mb-1.5 block text-sm font-semibold text-[#0b1f33]";

  return (
    <form
      name={formName}
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-[rgba(0,70,150,0.1)] bg-white p-6 shadow-[0_16px_48px_rgba(0,70,150,0.08)] sm:p-10"
    >
      <input type="hidden" name="form-name" value={formName} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>

        {isCareers ? (
          <>
            <div>
              <label className={labelClass} htmlFor="position">
                Position
              </label>
              <input
                id="position"
                name="position"
                required
                value={fields.position}
                onChange={handleChange}
                className={inputClass}
                placeholder="AI Engineer"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="portfolio">
                Portfolio / LinkedIn
              </label>
              <input
                id="portfolio"
                name="portfolio"
                value={fields.portfolio}
                onChange={handleChange}
                className={inputClass}
                placeholder="https://"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="resume">
                Resume
              </label>
              <label
                htmlFor="resume"
                className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-dashed border-[rgba(0,70,150,0.28)] bg-[#f7fafc] px-4 py-3.5 text-sm text-[#526575] transition-colors duration-200 hover:border-[#1e8eab]"
              >
                <span className="flex items-center gap-2">
                  <Upload size={16} className="text-[#1e8eab]" />
                  {resumeName || "Upload your resume (PDF, DOC)"}
                </span>
              </label>
              <input
                ref={fileInputRef}
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="sr-only"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className={labelClass} htmlFor="company">
                Company
              </label>
              <input
                id="company"
                name="company"
                value={fields.company}
                onChange={handleChange}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+92 51 1234567"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="service">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={fields.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="budget">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={fields.budget}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a range</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            {isCareers ? "Message" : "Project Details"}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={handleChange}
            className={inputClass}
            placeholder={
              isCareers
                ? "Tell us a bit about yourself"
                : "Tell us about your project and goals"
            }
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] disabled:opacity-60 sm:w-auto"
      >
        {submitting
          ? "Sending…"
          : isCareers
            ? "Submit Application"
            : "Send Message"}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
