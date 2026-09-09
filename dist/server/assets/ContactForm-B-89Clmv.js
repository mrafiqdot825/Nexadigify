import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Upload, ArrowRight } from "lucide-react";
const SERVICES = [
  "AI Automation",
  "Custom AI Development",
  "Agentic AI",
  "Data Analytics",
  "Web Development",
  "AI Consulting",
  "Other"
];
const BUDGETS = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k+", "Not sure yet"];
function ContactForm({ variant = "contact" }) {
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
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const fileInputRef = useRef(null);
  const handleChange = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleFileChange = (e) => {
    setResumeName(e.target.files?.[0]?.name ?? "");
  };
  const handleSubmit = async (e) => {
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
        body: data
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col items-center justify-center rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-white px-8 py-16 text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f8fa] text-[#1e8eab]", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 30 }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-bold text-[#0b1f33]", children: "Message sent." }),
          /* @__PURE__ */ jsx("p", { className: "max-w-sm text-[#526575]", children: isCareers ? "Thanks for applying — our team will review your application and be in touch soon." : "Thanks for reaching out. A member of our team will respond within one business day." })
        ]
      }
    );
  }
  const inputClass = "w-full rounded-xl border border-[rgba(0,70,150,0.16)] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#a8bccb] transition-colors duration-200 focus:border-[#1e8eab] focus:outline-none focus:ring-2 focus:ring-[rgba(30,142,171,0.18)]";
  const labelClass = "mb-1.5 block text-sm font-semibold text-[#0b1f33]";
  return /* @__PURE__ */ jsxs(
    "form",
    {
      name: formName,
      onSubmit: handleSubmit,
      className: "rounded-[28px] border border-[rgba(0,70,150,0.1)] bg-white p-6 shadow-[0_16px_48px_rgba(0,70,150,0.08)] sm:p-10",
      children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: formName }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsx("input", { id: "name", name: "name", required: true, value: fields.name, onChange: handleChange, className: inputClass, placeholder: "Jane Doe" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx("input", { id: "email", type: "email", name: "email", required: true, value: fields.email, onChange: handleChange, className: inputClass, placeholder: "jane@company.com" })
          ] }),
          isCareers ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "position", children: "Position" }),
              /* @__PURE__ */ jsx("input", { id: "position", name: "position", required: true, value: fields.position, onChange: handleChange, className: inputClass, placeholder: "AI Engineer" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "portfolio", children: "Portfolio / LinkedIn" }),
              /* @__PURE__ */ jsx("input", { id: "portfolio", name: "portfolio", value: fields.portfolio, onChange: handleChange, className: inputClass, placeholder: "https://" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "resume", children: "Resume" }),
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "resume",
                  className: "flex w-full cursor-pointer items-center justify-between rounded-xl border border-dashed border-[rgba(0,70,150,0.28)] bg-[#f7fafc] px-4 py-3.5 text-sm text-[#526575] transition-colors duration-200 hover:border-[#1e8eab]",
                  children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Upload, { size: 16, className: "text-[#1e8eab]" }),
                    resumeName || "Upload your resume (PDF, DOC)"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: fileInputRef,
                  id: "resume",
                  name: "resume",
                  type: "file",
                  accept: ".pdf,.doc,.docx",
                  onChange: handleFileChange,
                  className: "sr-only"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "company", children: "Company" }),
              /* @__PURE__ */ jsx("input", { id: "company", name: "company", value: fields.company, onChange: handleChange, className: inputClass, placeholder: "Company name" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "phone", children: "Phone" }),
              /* @__PURE__ */ jsx("input", { id: "phone", name: "phone", value: fields.phone, onChange: handleChange, className: inputClass, placeholder: "+1 (555) 000-0000" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "service", children: "Service" }),
              /* @__PURE__ */ jsxs("select", { id: "service", name: "service", value: fields.service, onChange: handleChange, className: inputClass, children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select a service" }),
                SERVICES.map((s) => /* @__PURE__ */ jsx("option", { value: s, children: s }, s))
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "budget", children: "Budget" }),
              /* @__PURE__ */ jsxs("select", { id: "budget", name: "budget", value: fields.budget, onChange: handleChange, className: inputClass, children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select a range" }),
                BUDGETS.map((b) => /* @__PURE__ */ jsx("option", { value: b, children: b }, b))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "message", children: isCareers ? "Message" : "Project Details" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                required: true,
                rows: 5,
                value: fields.message,
                onChange: handleChange,
                className: inputClass,
                placeholder: isCareers ? "Tell us a bit about yourself" : "Tell us about your project and goals"
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-medium text-red-600", children: "Something went wrong sending your message. Please try again." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            disabled: submitting,
            className: "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] disabled:opacity-60 sm:w-auto",
            children: [
              submitting ? "Sending…" : isCareers ? "Submit Application" : "Send Message",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "transition-transform duration-300 group-hover:translate-x-1" })
            ]
          }
        )
      ]
    }
  );
}
export {
  ContactForm as C
};
