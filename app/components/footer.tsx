// app/components/footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60 dark:border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} NAPCO – North American Pump Company L.L.C.
      </p>
      <p>8744 S Sandy Parkway, Unit E | Sandy, UT 84070</p>
      <p className="mt-2">
        <a
          href="https://napcopumps.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700 transition-colors"
        >
          www.napcopumps.com
        </a>
      </p>
    </footer>
  );
}