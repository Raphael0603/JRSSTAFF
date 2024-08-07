import CertificateOfJobCompletion from "/src/assets/images/CertificateOfJobCompletion.png";

export default function ApproveCertificate() {
  return (
    <img
      src={CertificateOfJobCompletion}
      alt="Certificate"
      className="300 w-auto  h-[490px] aspect-auto" // Add border, gray color, and adjust size
    />
  );
}
