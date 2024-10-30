import Subtitle from '../UI/Subtitle';

const Intro = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Subtitle>O nama</Subtitle>
      <h1 className='text-4xl mt-5'>Ko smo mi?</h1>
      <div className='flex gap-16 justify-between mt-8'>
        <p className='bg-primary-default px-8 py-8 text-black'>
          U Grand Dentalu posvećeni smo vrhunskoj stomatološkoj nezi koja
          kombinuje stručnost, inovativne tehnike i najmoderniju opremu. Naš tim
          stručnjaka sa dugogodišnjim iskustvom u različitim oblastima
          stomatologije svakom pacijentu pristupa individualno, osiguravajući
          personalizovan plan lečenja koji odgovara vašim specifičnim potrebama.
        </p>
        <p className='bg-primary-default px-8 py-8 text-black'>
          {' '}
          Naša ordinacija se ponosi najnovijim tehnologijama i tehnikama koje
          garantuju besprekorne rezultate, bilo da je reč o estetskoj
          stomatologiji, implantologiji ili složenim rekonstrukcijama. Uvek
          težimo savršenstvu, a naši pacijenti mogu biti sigurni da su u rukama
          najboljih. Verujemo da osmeh može promeniti život, a naša misija je da
          vam omogućimo upravo to - savršen osmeh koji donosi samopouzdanje i
          radost.
        </p>
      </div>

      <h2 className='text-2xl px-8 py-8 bg-accent-default text-end mt-16 w-fit ml-auto'>
        "Stručnost, posvećenost, savršenstvo. Naš tim stvara osmehe koji menjaju
        živote."
      </h2>
    </div>
  );
};

export default Intro;
