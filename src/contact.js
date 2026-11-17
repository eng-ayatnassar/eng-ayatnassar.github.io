export function createContactDraft({ name, email, service, message }, language, provider = "app") {
  const arabic = language === "ar";
  const subject = `${arabic ? "استفسار عن مشروع" : "Project inquiry"} — ${name}`;
  const body = [
    `${arabic ? "الاسم" : "Name"}: ${name}`,
    `${arabic ? "البريد" : "Email"}: ${email}`,
    `${arabic ? "الخدمة" : "Service"}: ${service}`,
    "",
    message,
  ].join("\n");
  if (provider === "gmail") {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=ayatnassar24%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return `mailto:ayatnassar24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
