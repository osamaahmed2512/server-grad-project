export function formatDateAMPM(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  date.setHours(date.getHours() + 3); // Add 3 hours for timezone adjustment
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
} 