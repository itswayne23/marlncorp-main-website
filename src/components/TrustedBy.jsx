function TrustedBy() {
  return (
    <section className="py-10 bg-white">
      <h3 className="text-center text-[#2B2B2B] text-[22px] font-inter mb-6">
        Trusted By
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-[150px] w-[90vw] m-auto">
        <img src="/godaddy logo.avif" alt="GoDaddy" className="h-10" />
        <img src="/vmware-logo.png" alt="VMware" className="h-10" />
        <img
          src="/spectracloud-logo.png"
          alt="Spectra Cloud"
          className="h-10"
        />
        <img src="/accela logo.avif" alt="Accela" className="h-10" />
        <img src="/pg&e logo.avif" alt="PG&E" className="h-[70px]  " />
      </div>
    </section>
  );
}
export default TrustedBy;
