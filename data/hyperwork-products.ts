export type ProductCategory = "keyboard" | "mouse";
export type ProductUseCase = "office" | "setup" | "mobile" | "performance";

export type ProductColorOption = {
  name: string;
  hex: string;
};

export type HyperWorkProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string[];
  imageUrl: string;
  imageUrls: string[];
  colorOptions: ProductColorOption[];
  tags: string[];
  useCases: ProductUseCase[];
  retailerLinks: {
    fpt?: string;
    tgdd?: string;
  };
};

function productSvg(
  name: string,
  category: ProductCategory,
  accent: string,
  label: string
) {
  const isKeyboard = category === "keyboard";
  const shape = isKeyboard
    ? `<rect x="68" y="150" width="344" height="116" rx="28" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="4"/>
       <g fill="#F6F7F8">${Array.from({ length: 8 })
         .map(
           (_, index) =>
             `<rect x="${100 + index * 34}" y="184" width="22" height="18" rx="5"/>`
         )
         .join("")}</g>
       <rect x="108" y="220" width="188" height="16" rx="8" fill="${accent}"/>`
    : `<rect x="184" y="96" width="112" height="248" rx="56" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="4"/>
       <path d="M240 104v70" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
       <circle cx="240" cy="205" r="10" fill="${accent}"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360" fill="none">
    <rect width="480" height="360" rx="36" fill="#F6F7F8"/>
    <circle cx="384" cy="78" r="54" fill="${accent}" fill-opacity=".12"/>
    <circle cx="92" cy="282" r="44" fill="#0B6DFF" fill-opacity=".10"/>
    ${shape}
    <text x="48" y="54" fill="#111111" font-family="Arial, sans-serif" font-size="24" font-weight="700">HyperWork</text>
    <text x="48" y="86" fill="#5B6470" font-family="Arial, sans-serif" font-size="18">${name}</text>
    <rect x="48" y="294" width="112" height="34" rx="17" fill="#111111"/>
    <text x="70" y="316" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="14" font-weight="700">${label}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function productSlides(name: string, category: ProductCategory, accent: string) {
  return [
    productSvg(name, category, accent, "Anh 1"),
    productSvg(name, category, category === "keyboard" ? "#0B6DFF" : "#FC5632", "Anh 2"),
    productSvg(name, category, "#111111", "Anh 3")
  ];
}

function createProduct(
  product: Omit<HyperWorkProduct, "imageUrl" | "imageUrls" | "retailerLinks"> & {
    accent: string;
    imageUrls?: string[];
    retailerLinks?: HyperWorkProduct["retailerLinks"];
  }
): HyperWorkProduct {
  const imageUrls =
    product.imageUrls ?? productSlides(product.name, product.category, product.accent);

  return {
    ...product,
    imageUrl: imageUrls[0],
    imageUrls,
    retailerLinks: product.retailerLinks ?? {}
  };
}

const rawProducts: HyperWorkProduct[] = [
  createProduct({
    id: "core-type",
    name: "Core Type",
    category: "keyboard",
    description: [
      "Full-size đủ phím số, phù hợp nhập liệu văn phòng và học tập hằng ngày.",
      "Dễ làm quen, gõ ổn định và hợp với setup cần sự đơn giản, gọn gàng."
    ],
    accent: "#FC5632",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/6_dc820fcb-ff29-4dd8-940f-55b701a11ee2.jpg?v=1764749452&width=2000",
      "https://hyperwork.vn/cdn/shop/files/7_1ee04f68-a5b2-4f30-93e4-cbd5027a62ab.jpg?v=1764749452&width=2000",
      "https://hyperwork.vn/cdn/shop/files/8_76e289cc-e8dd-4704-925d-640852073cb6.jpg?v=1764749452&width=2000",
      "https://hyperwork.vn/cdn/shop/files/3_885025b5-aaf6-4934-ae5d-20d7bc0e4c7f.jpg?v=1764749452&width=2000",
      "https://hyperwork.vn/cdn/shop/files/2_4a6a1fa8-f86a-4050-95ad-fd4c98ef171a.jpg?v=1764749452&width=2000",
      "https://hyperwork.vn/cdn/shop/files/4_3617352b-8fd6-4115-85ff-ca5ed88f9dfe.jpg?v=1764749452&width=2000"
    ],
    colorOptions: [{ name: "Đen", hex: "#1F1F1F" }],
    tags: ["Gọn nhẹ", "Gõ êm", "Văn phòng"],
    useCases: ["office", "setup"]
  }),
  createProduct({
    id: "hyperone-gen-3",
    name: "HyperOne Gen 3",
    category: "keyboard",
    description: [
      "Layout 65% gọn bàn nhưng vẫn đủ tiện cho làm việc và setup hiện đại.",
      "Vỏ nhôm cho cảm giác chắc tay, phù hợp người muốn bàn phím đẹp và bền hơn."
    ],
    accent: "#0B6DFF",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/8_1_221f3803-8772-4b50-95e3-80ca2298a040.jpg?v=1770793874&width=400",
      "https://hyperwork.vn/cdn/shop/files/7_1_64f7e298-10c7-41ee-afe9-bb67e06e9a0d.jpg?v=1770793874&width=400",
      "https://hyperwork.vn/cdn/shop/files/6_1_bfebb4e5-dfdd-4ebb-b2cd-d754ecd5ada9.jpg?v=1770793874&width=400",
      "https://hyperwork.vn/cdn/shop/files/4ggsd_11zon_1.jpg?v=1770793874&width=400",
      "https://hyperwork.vn/cdn/shop/files/5_1_c5c6ed6e-9daa-4de8-b77c-f4fb6389de82.jpg?v=1770793874&width=400"
    ],
    colorOptions: [{ name: "Đen", hex: "#1F1F1F" }],
    tags: ["Hiệu suất cao", "Đa kết nối", "Premium"],
    useCases: ["performance", "setup", "office"]
  }),
  createProduct({
    id: "hyperone-gen-2",
    name: "HyperOne Gen 2",
    category: "keyboard",
    description: [
      "Thiết kế 65% mỏng gọn, dễ đặt cùng laptop hoặc màn hình rời.",
      "Lựa chọn cân bằng cho học tập, làm việc và góc setup cá nhân."
    ],
    accent: "#FC5632",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/1_d988d621-1bec-496d-905e-80c395f1d181.webp?v=1759915713&width=800",
      "https://hyperwork.vn/cdn/shop/files/5_eac7a85d-754d-4e19-bcb8-e3603fa1c7a9.webp?v=1759915713&width=800",
      "https://hyperwork.vn/cdn/shop/files/4_ecd591e4-9472-488d-a51d-dfce5098d134.webp?v=1759915713&width=800"
    ],
    colorOptions: [{ name: "Đen", hex: "#1F1F1F" }],
    tags: ["Đa dụng", "Setup đẹp", "Ổn định"],
    useCases: ["office", "setup", "performance"]
  }),
  createProduct({
    id: "silentkey",
    name: "SilentKey",
    category: "keyboard",
    description: [
      "Full-size dễ làm quen, phù hợp người cần bàn phím ổn định để dùng lâu dài.",
      "Trải nghiệm gõ êm hơn cho văn phòng, lớp học hoặc không gian làm việc chung."
    ],
    accent: "#0242C5",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/ban-phim-khong-day-hyperwork-silentkey-hyperwork-1.webp?v=1757772893&width=400",
      "https://hyperwork.vn/cdn/shop/files/DSC00089.webp?v=1757772893&width=400",
      "https://hyperwork.vn/cdn/shop/files/DSC00088.webp?v=1757772893&width=400",
      "https://hyperwork.vn/cdn/shop/files/DSC00087.webp?v=1757772893&width=400"
    ],
    colorOptions: [
      { name: "Đen", hex: "#1F1F1F" },
      { name: "Trắng", hex: "#FFFFFF" }
    ],
    tags: ["Silent", "Văn phòng", "Gõ êm"],
    useCases: ["office", "setup"]
  }),
  createProduct({
    id: "silentkey-mini",
    name: "SilentKey Mini",
    category: "keyboard",
    description: [
      "Layout 75% tiết kiệm diện tích nhưng vẫn giữ các phím cần thiết.",
      "Dễ mang theo, dễ phối setup và phù hợp làm việc linh hoạt."
    ],
    accent: "#FC5632",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/Artboard_1_copy_33_fc4f1b0d-e10f-47e1-afbe-484ca22430e6.jpg?v=1759915731&width=400",
      "https://hyperwork.vn/cdn/shop/files/5_27c5a60a-c6e2-4da9-b773-8ed1f7d9739f.webp?v=1759915731&width=400",
      "https://hyperwork.vn/cdn/shop/files/6_fd292573-d7e4-4d88-8843-aa2be3ae9c6b.webp?v=1759915731&width=400",
      "https://hyperwork.vn/cdn/shop/files/1_5c5299de-3788-4635-9293-3ed551ced33f.webp?v=1759915731&width=400"
    ],
    colorOptions: [
      { name: "Đen", hex: "#1F1F1F" },
      { name: "Trắng", hex: "#FFFFFF" },
      { name: "Xanh", hex: "#2F5F9F" }
    ],
    tags: ["Mini", "Silent", "Di động"],
    useCases: ["mobile", "setup", "office"]
  }),
  createProduct({
    id: "core-click",
    name: "Core Click",
    category: "mouse",
    description: [
      "Chuột không dây nhỏ gọn, dễ cầm và dễ mang theo cùng laptop.",
      "Click êm, phù hợp văn phòng, học tập và không gian cần ít tiếng ồn."
    ],
    accent: "#FC5632",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/1_fe8229d0-9acc-48d5-a347-7d019e54a85c.jpg?v=1764831066&width=1400",
      "https://hyperwork.vn/cdn/shop/files/2_b0399e1e-105f-4532-8671-43e63a3e5519.jpg?v=1764831067&width=1400",
      "https://hyperwork.vn/cdn/shop/files/3_b22606c0-1582-4198-8eb7-1b42703faa8f.jpg?v=1764831067&width=400",
      "https://hyperwork.vn/cdn/shop/files/5_23cf63c2-6387-489b-b50e-ba98a45c25c8.jpg?v=1764831067&width=400",
      "https://hyperwork.vn/cdn/shop/files/4_e8f048f6-0f30-4084-ba60-954ee0f26b18.jpg?v=1764831067&width=400",
      "https://hyperwork.vn/cdn/shop/files/6_cc6ca600-939e-4fd3-8021-cfd31e9b0c8b.jpg?v=1764831066&width=400"
    ],
    colorOptions: [{ name: "Đen", hex: "#1F1F1F" }],
    tags: ["Không dây", "Gọn nhẹ", "Văn phòng"],
    useCases: ["office", "mobile"]
  }),
  createProduct({
    id: "silentium",
    name: "Silentium",
    category: "mouse",
    description: [
      "Form cầm thoải mái cho người dùng chuột nhiều giờ mỗi ngày.",
      "Silent click giúp giữ không gian yên tĩnh tại văn phòng hoặc setup tại nhà."
    ],
    accent: "#0B6DFF",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/DSC01031.webp?v=1759915663&width=1400",
      "https://hyperwork.vn/cdn/shop/files/DSC01038.webp?v=1759915663&width=1400",
      "https://hyperwork.vn/cdn/shop/files/DSC01047.webp?v=1759915663&width=400",
      "https://hyperwork.vn/cdn/shop/files/DSC010450.webp?v=1759915663&width=400",
      "https://hyperwork.vn/cdn/shop/files/DSC01039.webp?v=1759915663&width=400",
      "https://hyperwork.vn/cdn/shop/files/DSC010457.webp?v=1759915663&width=400"
    ],
    colorOptions: [
      { name: "Đen", hex: "#1F1F1F" },
      { name: "Trắng", hex: "#FFFFFF" }
    ],
    tags: ["Silent click", "Thoải mái", "Văn phòng"],
    useCases: ["office", "setup"]
  }),
  createProduct({
    id: "silentium-mini",
    name: "Silentium Mini",
    category: "mouse",
    description: [
      "Kích thước mini nhẹ, dễ bỏ túi và phù hợp làm việc di động.",
      "Click êm, gọn bàn nhưng vẫn đủ thoải mái cho laptop và học tập."
    ],
    accent: "#FC5632",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/chuot-khong-day-hyperwork-silentium-mini-hyperwork-2.webp?v=1759915636&width=1400",
      "https://hyperwork.vn/cdn/shop/files/7_01844c40-8490-4928-9571-f3a92a851b2c.webp?v=1759915636&width=400",
      "https://hyperwork.vn/cdn/shop/files/chuot-khong-day-hyperwork-silentium-mini-hyperwork-3.webp?v=1759915636&width=1400",
      "https://hyperwork.vn/cdn/shop/files/11_4a8cdc85-9e06-4bc2-a76a-b03b017e4294.webp?v=1759915636&width=400",
      "https://hyperwork.vn/cdn/shop/files/8_a5507ddb-24d2-4c8c-970d-5072346675a2.webp?v=1759915636&width=400",
      "https://hyperwork.vn/cdn/shop/files/5_c2e75beb-7b71-46d6-9ac1-d0b3b1955753.webp?v=1759915636&width=400",
      "https://hyperwork.vn/cdn/shop/files/9_87f15be4-52d6-4fdb-84e3-9cc4368c0e9c.webp?v=1759915636&width=400"
    ],
    colorOptions: [
      { name: "Đen", hex: "#1F1F1F" },
      { name: "Trắng", hex: "#FFFFFF" },
      { name: "Xanh Dương", hex: "#2F5F9F" }
    ],
    tags: ["Mini", "Silent click", "Di động"],
    useCases: ["mobile", "office", "setup"]
  }),
  createProduct({
    id: "macro",
    name: "Macro",
    category: "mouse",
    description: [
      "Nhiều nút hỗ trợ thao tác nhanh hơn trong workflow hằng ngày.",
      "Phù hợp xử lý tài liệu, bảng tính, sáng tạo nội dung và làm việc cường độ cao."
    ],
    accent: "#0242C5",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/2_b7ee3f0d-275d-454d-b05b-a757f5d48181.jpg?v=1765261698&width=400",
      "https://hyperwork.vn/cdn/shop/files/7_8c272af2-1b1a-4bb2-aba6-2126239f2a83.jpg?v=1765261785&width=400",
      "https://hyperwork.vn/cdn/shop/files/6_7151bf53-110f-4797-8966-d408e30c6955.jpg?v=1765261785&width=400",
      "https://hyperwork.vn/cdn/shop/files/1_fa1182f1-c43d-4dcf-960e-ed40806490e0.jpg?v=1765261785&width=400",
      "https://hyperwork.vn/cdn/shop/files/5_b89dfe3c-eb02-48e6-9c22-6351c6c891b0.jpg?v=1765261698&width=400",
      "https://hyperwork.vn/cdn/shop/files/4_ad5dcf3d-dffb-4876-b150-8e788ac9862b.jpg?v=1765261698&width=400",
      "https://hyperwork.vn/cdn/shop/files/3_3a2ac960-bc72-405d-a895-2e8b13eb1f22.jpg?v=1765261604&width=400"
    ],
    colorOptions: [{ name: "Đen", hex: "#1F1F1F" }],
    tags: ["Macro", "Chính xác", "Hiệu suất cao"],
    useCases: ["performance", "office"]
  }),
  createProduct({
    id: "silentium-gen-2",
    name: "Silentium Gen 2",
    category: "mouse",
    description: [
      "Silent click thế hệ mới cho thao tác êm và chắc hơn khi làm việc dài giờ.",
      "Con lăn ngang tiện cho bảng tính, nhiều tab và nhu cầu chuột cao cấp hơn."
    ],
    accent: "#0B6DFF",
    imageUrls: [
      "https://hyperwork.vn/cdn/shop/files/5_11b7850e-8c6a-4285-8263-fcecf033755b.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/1_92c9b195-8601-45af-bc73-31667f81369c.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/2_5f527aa8-32d9-4bdb-bc9e-32ad9134ca4e.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/4_fec4615e-c73c-47e9-a595-5e49ea9bea4c.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/8_cf98a783-e5e1-4e1d-99dd-04858e95511b.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/3_8a472182-acb8-461b-a098-558664513a13.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/6_6adefeb8-311c-4bc4-ba5a-f4fdf6f697fb.jpg?v=1770793903&width=400",
      "https://hyperwork.vn/cdn/shop/files/7_74e815f8-c8fc-4afc-abf1-b0abc470c211.jpg?v=1770793903&width=400"
    ],
    colorOptions: [
      { name: "Đen", hex: "#1F1F1F" },
      { name: "Trắng", hex: "#FFFFFF" }
    ],
    tags: ["Silent click", "Gen 2", "Setup đẹp"],
    useCases: ["setup", "office", "performance"]
  })
];

const productRetailerLinks: Record<string, HyperWorkProduct["retailerLinks"]> = {
  "core-type": {
    fpt: "https://fptshop.com.vn/phu-kien/ban-phim-khong-day-hyperwork-core-type",
    tgdd: "https://www.thegioididong.com/ban-phim/ban-phim-bluetooth-hyperwork-core-type"
  },
  "hyperone-gen-3": {
    fpt: "https://fptshop.com.vn/phu-kien/ban-phim-khong-day-hyperwork-hyperone-gen-3",
    tgdd: "https://www.thegioididong.com/ban-phim/ban-phim-bluetooth-hyperwork-hyperone-gen-3"
  },
  "hyperone-gen-2": {
    fpt: "https://fptshop.com.vn/phu-kien/ban-phim-khong-day-hyperwork-hyperone-gen-2",
    tgdd: "https://www.thegioididong.com/ban-phim/ban-phim-bluetooth-hyperwork-hyperone-gen-2"
  },
  silentkey: {
    fpt: "https://fptshop.com.vn/phu-kien/ban-phim-khong-day-hyperwork-silentkey",
    tgdd: "https://www.thegioididong.com/ban-phim/ban-phim-bluetooth-hyperwork-silentkey"
  },
  "silentkey-mini": {
    tgdd: "https://www.thegioididong.com/ban-phim/ban-phim-bluetooth-hyperwork-silentkey-mini"
  },
  "core-click": {
    fpt: "https://fptshop.com.vn/phu-kien/chuot-khong-day-hyperwork-core-click",
    tgdd: "https://www.thegioididong.com/chuot-may-tinh/chuot-sac-bluetooth-hyperwork-core-click"
  },
  silentium: {
    fpt: "https://fptshop.com.vn/phu-kien/chuot-khong-day-hyperwork-silentium",
    tgdd: "https://www.thegioididong.com/chuot-may-tinh/chuot-sac-bluetooth-hyperwork-silentium-ms01"
  },
  "silentium-mini": {
    fpt: "https://fptshop.com.vn/phu-kien/chuot-khong-day-hyperwork-silentium-mini",
    tgdd: "https://www.thegioididong.com/chuot-may-tinh/chuot-sac-bluetooth-hyperwork-silentium-mini"
  },
  macro: {
    tgdd: "https://www.thegioididong.com/chuot-may-tinh/chuot-sac-bluetooth-hyperwork-macro"
  },
  "silentium-gen-2": {
    fpt: "https://fptshop.com.vn/phu-kien/chuot-khong-day-hyperwork-silentium-gen-2",
    tgdd: "https://www.thegioididong.com/chuot-may-tinh/chuot-sac-bluetooth-hyperwork-silentium-gen-2"
  }
};

export const hyperworkProducts = rawProducts.map((product) => ({
  ...product,
  retailerLinks: productRetailerLinks[product.id] ?? product.retailerLinks
}));

export function findProduct(id: string) {
  return hyperworkProducts.find((product) => product.id === id);
}
