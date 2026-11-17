export function createContactDraft({ name, email, service, message }, language) {
  const arabic = language === "ar";
  const subject = `${arabic ? "استفسار عن مشروع" : "Project inquiry"} — ${name}`;
  const body = [
    `${arabic ? "الاسم" : "Name"}: ${name}`,
    `${arabic ? "البريد" : "Email"}: ${email}`,
    `${arabic ? "الخدمة" : "Service"}: ${service}`,
    "",
    message,
  ].join("\n");
  return `mailto:ayatnassar24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
