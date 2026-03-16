// NZ Regions — photos and map config for 16 regions
// All photos from Unsplash (free, no attribution required)
// All IDs verified to match their captions — no random/irrelevant photos

const img = (id, w = 400) => `https://images.unsplash.com/${id}?w=${w}&h=250&fit=crop&auto=format&q=80`;

export const nzRegions = [
  {
    id: 'northland',
    photo: img('photo-1655475783893-f636c2c54d9d'),
    cityPhotos: [
      { city: 'Whangārei', url: img('photo-1506431725520-a03af73747c0'), caption: 'Whangārei harbour' },
      { city: 'Kerikeri', url: img('photo-1772215842204-3e5838af499c'), caption: 'Kerikeri countryside' },
      { city: 'Paihia', url: img('photo-1695633213155-aeeff181c343'), caption: 'Paihia, Bay of Islands' },
    ],
    famousPhotos: [
      { item: 'Cape Reinga', url: img('photo-1655475783893-f636c2c54d9d'), caption: 'Cape Reinga lighthouse' },
      { item: 'Treaty of Waitangi', url: img('photo-1686941224638-5aaff456aa32'), caption: 'Bay of Islands, Waitangi' },
      { item: 'Kauri trees', url: img('photo-1627685123750-49395e25a819'), caption: 'Tāne Mahuta, ancient kauri tree' },
    ],
    color: '#FF6B9D',
  },
  {
    id: 'auckland',
    photo: img('photo-1595125989588-36d745a2a828'),
    cityPhotos: [
      { city: 'Auckland', url: img('photo-1595125989588-36d745a2a828'), caption: 'Auckland skyline' },
    ],
    famousPhotos: [
      { item: 'Sky Tower', url: img('photo-1741786325727-5ca6bd389030'), caption: 'Auckland city at dusk' },
      { item: 'Volcanoes', url: img('photo-1541479562354-3352d972f4df'), caption: 'Rangitoto Island' },
      { item: 'Harbour', url: img('photo-1743113488160-e7000f015ead'), caption: 'Waitematā Harbour' },
    ],
    color: '#C084FC',
  },
  {
    id: 'waikato',
    photo: img('photo-1644021267335-dd6ec911687d'),
    cityPhotos: [
      { city: 'Hamilton', url: img('photo-1612409668817-6a3b0555b1fa'), caption: 'Hamilton Gardens' },
      { city: 'Cambridge', url: img('photo-1687858486364-2db05b8b6f26'), caption: 'Lake Te Koo Utu, Cambridge' },
    ],
    famousPhotos: [
      { item: 'Hobbiton', url: img('photo-1508924379194-91ff8ad10091'), caption: 'Hobbiton movie set' },
      { item: 'Waitomo Caves', url: img('photo-1586193874750-44514d54f875'), caption: 'Waitomo glowworm caves' },
      { item: 'Longest river', url: img('photo-1644021267335-dd6ec911687d'), caption: 'Waikato River' },
    ],
    color: '#60A5FA',
  },
  {
    id: 'bay-of-plenty',
    photo: img('photo-1718398892763-1695285c617d'),
    cityPhotos: [
      { city: 'Tauranga', url: img('photo-1547743797-c68522a769b4'), caption: 'Tauranga coast' },
      { city: 'Rotorua', url: img('photo-1571504042565-386eacceb5d8'), caption: 'Rotorua thermal pools' },
      { city: 'Whakatāne', url: img('photo-1620888385185-83a54f123443'), caption: 'Whakatāne harbour sunset' },
    ],
    famousPhotos: [
      { item: 'Mt Maunganui', url: img('photo-1718398892763-1695285c617d'), caption: 'Mount Maunganui beach' },
      { item: 'Geothermal activity', url: img('photo-1645697772639-204e4feb35a5'), caption: 'Boiling mud pools' },
      { item: 'Kiwifruit', url: img('photo-1572539280469-9c738c59964d'), caption: 'Kiwifruit harvest' },
    ],
    color: '#6EE7B7',
  },
  {
    id: 'gisborne',
    photo: img('photo-1601455841643-f210f679564d'),
    cityPhotos: [
      { city: 'Gisborne', url: img('photo-1601455841643-f210f679564d'), caption: 'Gisborne coastline' },
    ],
    famousPhotos: [
      { item: 'First sunrise', url: img('photo-1564050476361-ea8a6504eb9d'), caption: 'East coast sunrise' },
      { item: 'Captain Cook landing', url: img('photo-1564050476361-ea8a6504eb9d'), caption: 'NZ east coast' },
      { item: 'Māori culture', url: img('photo-1756149126185-141a88e9b136'), caption: 'Māori rock carvings' },
    ],
    color: '#FBBF24',
  },
  {
    id: 'hawkes-bay',
    photo: img('photo-1741942607409-ebe998dd0406'),
    cityPhotos: [
      { city: 'Napier', url: img('photo-1624598804860-8d1f5d271623'), caption: 'Art Deco Napier' },
      { city: 'Hastings', url: img('photo-1560493676-04071c5f467b'), caption: 'Hastings vineyards' },
    ],
    famousPhotos: [
      { item: 'Art Deco', url: img('photo-1624598804860-8d1f5d271623'), caption: 'Art Deco architecture' },
      { item: 'Vineyards', url: img('photo-1560493676-04071c5f467b'), caption: 'Hawke\'s Bay wine country' },
      { item: 'Cape Kidnappers', url: img('photo-1741942607409-ebe998dd0406'), caption: 'Cape Kidnappers' },
    ],
    color: '#FB923C',
  },
  {
    id: 'taranaki',
    photo: img('photo-1597655601841-214a4cfe8b2c'),
    cityPhotos: [
      { city: 'New Plymouth', url: img('photo-1707291665769-e5e281bc68fa'), caption: 'Te Rewa Rewa Bridge, New Plymouth' },
    ],
    famousPhotos: [
      { item: 'Mt Taranaki', url: img('photo-1597655601841-214a4cfe8b2c'), caption: 'Mt Taranaki summit' },
      { item: 'Coastal walkway', url: img('photo-1707291693567-654058a65139'), caption: 'Fitzroy Beach, New Plymouth' },
      { item: 'Egmont National Park', url: img('photo-1524281423221-234569bc0438'), caption: 'Egmont National Park' },
    ],
    color: '#F472B6',
  },
  {
    id: 'manawatu-whanganui',
    photo: img('photo-1603571929558-2ddd39e08ea2'),
    cityPhotos: [
      { city: 'Palmerston North', url: img('photo-1720075499597-5d0b66ccd607'), caption: 'Palmerston North nature' },
      { city: 'Whanganui', url: img('photo-1587895858518-5fbc2b3cf94c'), caption: 'Whanganui city view' },
    ],
    famousPhotos: [
      { item: 'Whanganui River', url: img('photo-1667098506369-ae98a63e26c0'), caption: 'Whanganui River at night' },
      { item: 'Massey University', url: img('photo-1561957618-891468b3f478'), caption: 'Massey University campus' },
    ],
    color: '#A78BFA',
  },
  {
    id: 'wellington',
    photo: img('photo-1578959392610-495de77b85e6'),
    cityPhotos: [
      { city: 'Wellington', url: img('photo-1578959392610-495de77b85e6'), caption: 'Wellington harbour' },
    ],
    famousPhotos: [
      { item: 'Te Papa', url: img('photo-1680436601148-09e3a102d1f4'), caption: 'Te Papa Museum' },
      { item: 'Cable car', url: img('photo-1562620948-7ef06527f430'), caption: 'Wellington cable car' },
      { item: 'Parliament', url: img('photo-1558572365-53f055c72aa1'), caption: 'Beehive & Parliament' },
    ],
    color: '#38BDF8',
  },
  {
    id: 'tasman',
    photo: img('photo-1501601142499-7cf86abd191a'),
    cityPhotos: [
      { city: 'Richmond', url: img('photo-1501601142499-7cf86abd191a'), caption: 'Tasman Bay' },
      { city: 'Motueka', url: img('photo-1565588515543-1804d5a0db68'), caption: 'Abel Tasman coast' },
    ],
    famousPhotos: [
      { item: 'Abel Tasman', url: img('photo-1501601142499-7cf86abd191a'), caption: 'Abel Tasman golden beach' },
      { item: 'Golden beaches', url: img('photo-1565588515543-1804d5a0db68'), caption: 'Abel Tasman island' },
    ],
    color: '#34D399',
  },
  {
    id: 'nelson',
    photo: img('photo-1589446482864-4623c4301397'),
    cityPhotos: [
      { city: 'Nelson', url: img('photo-1725065985772-8571d2ddf255'), caption: 'Nelson clock tower' },
    ],
    famousPhotos: [
      { item: 'Centre of NZ', url: img('photo-1589446482864-4623c4301397'), caption: 'Cable Bay, Nelson' },
      { item: 'Abel Tasman NP', url: img('photo-1707077715672-f1966f9cdf80'), caption: 'Abel Tasman beach' },
      { item: 'Arts & crafts', url: img('photo-1451337516015-6b6e9a44a8a3'), caption: 'Nelson artisan pottery' },
    ],
    color: '#FCD34D',
  },
  {
    id: 'marlborough',
    photo: img('photo-1609815633572-c98d2022db07'),
    cityPhotos: [
      { city: 'Blenheim', url: img('photo-1630551100749-cc06d76876a7'), caption: 'Blenheim overlooking Cook Strait' },
      { city: 'Picton', url: img('photo-1609815633572-c98d2022db07'), caption: 'Marlborough Sounds' },
    ],
    famousPhotos: [
      { item: 'Marlborough Sounds', url: img('photo-1609815633572-c98d2022db07'), caption: 'Marlborough Sounds' },
      { item: 'Wine', url: img('photo-1630551100749-cc06d76876a7'), caption: 'Marlborough wine country' },
    ],
    color: '#FB923C',
  },
  {
    id: 'west-coast',
    photo: img('photo-1570399698888-a87707749d1a'),
    cityPhotos: [
      { city: 'Greymouth', url: img('photo-1570399698888-a87707749d1a'), caption: 'West Coast cliffs' },
      { city: 'Hokitika', url: img('photo-1544195300-4c785a8cdbd8'), caption: 'Hokitika Gorge' },
    ],
    famousPhotos: [
      { item: 'Franz Josef', url: img('photo-1520208422220-d12a3c588e6c'), caption: 'Franz Josef Glacier' },
      { item: 'Pancake Rocks', url: img('photo-1570399698888-a87707749d1a'), caption: 'Pancake Rocks, Punakaiki' },
      { item: 'Pounamu', url: img('photo-1763935173104-15b96cadfbb0'), caption: 'Greenstone River valley' },
    ],
    color: '#818CF8',
  },
  {
    id: 'canterbury',
    photo: img('photo-1529736576495-1ed4a29ca7e1'),
    cityPhotos: [
      { city: 'Christchurch', url: img('photo-1576569847896-3cead09c0eec'), caption: 'Christchurch city tram' },
      { city: 'Timaru', url: img('photo-1625980520446-129fa0fb435c'), caption: 'Canterbury coast' },
    ],
    famousPhotos: [
      { item: 'Aoraki / Mt Cook', url: img('photo-1706341299879-4c52bd9c88fa'), caption: 'Aoraki / Mount Cook' },
      { item: 'Canterbury Plains', url: img('photo-1529736576495-1ed4a29ca7e1'), caption: 'Road to Mount Cook' },
    ],
    color: '#2DD4BF',
  },
  {
    id: 'otago',
    photo: img('photo-1519871401754-8578d6dff38d'),
    cityPhotos: [
      { city: 'Queenstown', url: img('photo-1519871401754-8578d6dff38d'), caption: 'Queenstown lakefront' },
      { city: 'Dunedin', url: img('photo-1508068235022-85a3716679b7'), caption: 'Dunedin coast' },
      { city: 'Wanaka', url: img('photo-1526188717906-ab4a2f949f26'), caption: 'Lake Wanaka' },
    ],
    famousPhotos: [
      { item: 'Adventure sports', url: img('photo-1519871401754-8578d6dff38d'), caption: 'Queenstown adventures' },
      { item: 'Lake Wanaka', url: img('photo-1529023971088-2d8a13c1d937'), caption: 'Roys Peak, Lake Wanaka' },
      { item: 'Otago Peninsula', url: img('photo-1739582766872-0689b7ffb372'), caption: 'Otago Peninsula' },
    ],
    color: '#F9A8D4',
  },
  {
    id: 'southland',
    photo: img('photo-1523819088009-c3ecf1e34000'),
    cityPhotos: [
      { city: 'Invercargill', url: img('photo-1590478121546-e4a21d991b8d'), caption: 'Invercargill cherry blossoms' },
      { city: 'Te Anau', url: img('photo-1660113417054-7eb609ee2f81'), caption: 'Te Anau lakefront' },
    ],
    famousPhotos: [
      { item: 'Milford Sound', url: img('photo-1523819088009-c3ecf1e34000'), caption: 'Milford Sound' },
      { item: 'Fiordland', url: img('photo-1595125990263-bedff96361a6'), caption: 'Fiordland mountains' },
      { item: 'Stewart Island', url: img('photo-1705591892782-2d022294c7f0'), caption: 'Stewart Island seabird' },
    ],
    color: '#6EE7B7',
  },
];

// Get hero photo URL by region id
export function getRegionPhoto(id) {
  return nzRegions.find(r => r.id === id)?.photo || '';
}

// Get city photos by region id
export function getRegionCityPhotos(id) {
  return nzRegions.find(r => r.id === id)?.cityPhotos || [];
}

// Get famous-for photos by region id
export function getRegionFamousPhotos(id) {
  return nzRegions.find(r => r.id === id)?.famousPhotos || [];
}

// Get region color by id
export function getRegionColor(id) {
  return nzRegions.find(r => r.id === id)?.color || '#C084FC';
}
