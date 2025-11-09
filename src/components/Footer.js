// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Info,
  HelpCircle,
  Phone,
  FileText,
  Instagram,
  Twitter,
  Linkedin,
  Download,
  Briefcase,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12 px-6 text-right" dir="rtl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Info size={20} /> با جاباما
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:underline">
                <FileText size={16} /> درباره ما
              </Link>
            </li>
            <li>
              <Link to="/blog" className="flex items-center gap-2 hover:underline">
                <FileText size={16} /> مجله جاباما
              </Link>
            </li>
            <li>
              <Link to="/careers" className="flex items-center gap-2 hover:underline">
                <Briefcase size={16} /> فرصت‌های شغلی
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:underline">
                <Phone size={16} /> تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <HelpCircle size={20} /> خدمات مشتریان
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="flex items-center gap-2 hover:underline">
                <HelpCircle size={16} /> پرسش‌های متداول
              </Link>
            </li>
            <li>
              <Link to="/terms" className="flex items-center gap-2 hover:underline">
                <FileText size={16} /> قوانین و مقررات
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="flex items-center gap-2 hover:underline">
                <FileText size={16} /> حریم خصوصی
              </Link>
            </li>
            <li>
              <Link to="/support" className="flex items-center gap-2 hover:underline">
                <Phone size={16} /> پشتیبانی
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Instagram size={20} /> همراه ما باشید
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://instagram.com/jabama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Instagram size={16} /> اینستاگرام
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jabama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Twitter size={16} /> توییتر
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/jabama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin size={16} /> لینکداین
              </a>
            </li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Download size={20} /> اپلیکیشن ما
          </h4>
          <p className="mb-3">دانلود از:</p>
          <div className="flex gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=jabama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/google-play-badge.png"
                alt="Google Play"
                className="h-10 rounded-lg shadow"
              />
            </a>
            <a
              href="https://apps.apple.com/app/jabama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/app-store-badge.png"
                alt="App Store"
                className="h-10 rounded-lg shadow"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-8 pt-6 text-sm space-y-1 text-white/80">
        <p className="flex items-center gap-2">
          <Phone size={16} /> تلفن پشتیبانی: ۰۲۱-۴۳۹۰۰۹۰۰
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} /> ایمیل: support@jabama.ir
        </p>
        <p>© کلیه حقوق این سایت محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
