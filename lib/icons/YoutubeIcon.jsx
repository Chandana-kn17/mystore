export default function YoutubeIcon({
  width = 22,
  height = 22,
  color = "#FF0000",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 4.8 12 4.8 12 4.8h0s-3.8 0-6.9.3c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.8.2 6.6.3 6.6.3s3.8 0 6.9-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4c0-1.7-.2-3.3-.2-3.3zM10 14.8V9.2l5 2.8-5 2.8z" />
    </svg>
  );
}