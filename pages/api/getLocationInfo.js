// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const officeInfo = [
  {
    id: "21",
    city: "Shanghai",
    address:
      "5F, Tower A, One Financial Street 1509 \nZhongxing Road \nShanghai, China",
    map_address:
      "5F, Tower A, One Financial Street 1509 \nZhongxing Road \nShanghai, China",
    map_dot_top: "34.1",
    map_dot_left: "79.5",
    phone: "+86 021 6433 0062",
    fax_number: "+86 021 6433 0590",
    email: "info@hbaarchitecture.com",
    employment_request_email: "Careers@HBAarchitecture.com",
    project_information_email: "info@hbaarchitecture.com",
    vendor_contact_email: "info@hbaarchitecture.com",
    media_contact_email: "info@hbaarchitecture.com",
  },
  {
    id: "22",
    city: "Singapore",
    address: "46 Kim Yam Road\nThe Herencia, #01-10 \nSingapore 239351",
    map_address: "46 Kim Yam Road\n\nSingapore 239351",
    map_dot_top: "53.7",
    map_dot_left: "75.6",
    phone: "+65 6337 2511",
    fax_number: "+65 6337 2460",
    email: "info@hbaarchitecture.com",
    employment_request_email: "Careers@HBAarchitecture.com",
    project_information_email: "info@hbaarchitecture.com",
    vendor_contact_email: "info@hbaarchitecture.com",
    media_contact_email: "info@hbaarchitecture.com",
  },
];

export { officeInfo };

export default function handler(req, res) {
  if (req.method === "POST") {
    const returnable = officeInfo.find(
      (item) => item.id == req.body.location_id
    );
    res.status(200).json(returnable);
  } else {
    res.status(405).json({ message: "Only Post requests allowed" });
  }
}
