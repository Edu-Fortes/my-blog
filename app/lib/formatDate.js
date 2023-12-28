export default function formatDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}
