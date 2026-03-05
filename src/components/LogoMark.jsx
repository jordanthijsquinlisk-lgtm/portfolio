export default function LogoMark() {
  return (
    <div style={{
      width: 28,
      height: 28,
      border: '2px solid white',
      borderRadius: '50%',
      position: 'relative',
      flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 8,
        height: 8,
        background: 'white',
        borderRadius: '50%',
      }} />
    </div>
  );
}
