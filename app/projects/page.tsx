"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, Zap, Calendar, Search, Filter, CheckCircle, Clock, Building } from "lucide-react"

type WorkType = "EHV_WORKS" | "HT_WORKS" | "LT_WORKS" | "GOVERNMENT_WORKS"


const projectsData = {
  "ongoing": [
    {
      "EHV_WORKS": [
        {
          "SL NO": "1",
          "PROJECT": "NTT DATA Center",
          "DESCRIPTION": "Establishment of 220/11 kV GIS EHT Substation having an installed capacity of \n     2 x 40/50 MVA Power Transformers",
          "LOCATION": "Airport Road, Bangalore, Devanahalli"
        },
        {
          "SL NO": "2",
          "PROJECT": "Prestige Jindal City",
          "DESCRIPTION": "Establishment of 66/11 kV AIS Substation having installed capacity of\n     2x20 MVA Power Transformers and 66kV 1C x 1000 sqmm cable for a Route Length of 4.5 Kms",
          "LOCATION": "Tumkur Road, West Bangalore, Nelmangala"
        },
        {
          "SL NO": "3",
          "PROJECT": "KPTCL",
          "DESCRIPTION": "Establishment of 220 kV GIS Switching Station and 220kV 1C x 1200 sqmm cable for a Route Length of \u00a0 5 kms",
          "LOCATION": "Sadahalli Gate, New Airport Road, Bangalore"
        },
        {
          "SL NO": "4",
          "PROJECT": "Prestige Kings County",
          "DESCRIPTION": "Increasing Vertical Clearance by providing 110kV DC towers\n    with drake conductor and dismandling the existing 66kV SC coyote conductor",
          "LOCATION": "Jigni Link Road, Bangalore"
        },
        {
          "SL NO": "5",
          "PROJECT": "Prestige MRG",
          "DESCRIPTION": "Shifting and Realigning of existing 220/220kV Multi circuit line by providing 220/220kV Multi Circuit NB towers with AAAC Moose conductor",
          "LOCATION": "Bommasandara Industrial Area, Bangalore"
        }
      ],
      "LT_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "Prudence Chittiappa & Others",
          "PROJECT": "Prestige Waterford",
          "ADDRESS": "ECC Road, EPIP, Bangalore",
          "LOAD in kVA": "5009"
        },
        {
          "SL NO": "2",
          "CLIENT NAME": "Village De Nandi Pvt Ltd",
          "PROJECT": "Prestige Sanctuary",
          "ADDRESS": "Kundana Hobli, Devanahalli Taluk",
          "LOAD in kVA": "1820"
        },
        {
          "SL NO": "3",
          "CLIENT NAME": "B.S.N HARI AND OTHERS",
          "PROJECT": "Mantri Webcity Parcel 3",
          "ADDRESS": "Hennur Road, Bangalore",
          "LOAD in kVA": "4372"
        },
        {
          "SL NO": "4",
          "CLIENT NAME": "Prestige Estates Projects Ltd",
          "PROJECT": "Prestige Whitemeadows Tower 3",
          "ADDRESS": "Whitefield, Bangalore",
          "LOAD in kVA": "1176"
        },
        {
          "SL NO": "5",
          "CLIENT NAME": "Prestige Estates Projects Ltd",
          "PROJECT": "The Prestige City",
          "ADDRESS": "Sarjapura, Bangalore",
          "LOAD in kVA": "41176"
        },
        {
          "SL NO": "6",
          "CLIENT NAME": "Ajmera Housing Corporation",
          "PROJECT": "Ajmera Nucleus",
          "ADDRESS": "Electronic City, Bangalore",
          "LOAD in kVA": "1859"
        },
        {
          "SL NO": "7",
          "CLIENT NAME": "Bhartiya Urban Pvt Ltd",
          "PROJECT": "Nikoo 1",
          "ADDRESS": "Chokkanahalli Village, Bangalore",
          "LOAD in kVA": "10588"
        }
      ],
      "HT_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Senate",
          "ADDRESS": "Bilikenahalli Village, Bangalore",
          "LOAD in kVA": "3600"
        },
        {
          "SL NO": "2",
          "CLIENT NAME": "Gardenview Abode Pvt Ltd",
          "PROJECT": "Mantri Blossom",
          "ADDRESS": "Lalbagh Road, Bangalore",
          "LOAD in kVA": "1000"
        },
        {
          "SL NO": "3",
          "CLIENT NAME": "NTT Data Center",
          "PROJECT": "Prestige Tech Cloud",
          "ADDRESS": "Devenahalli, Bangalore",
          "LOAD in kVA": "30000"
        },
        {
          "SL NO": "4",
          "CLIENT NAME": "Prestige Estates Projects Ltd",
          "PROJECT": "Prestige Lakeshore Drive",
          "ADDRESS": "Sarjapura, Bangalore",
          "LOAD in kVA": "27000"
        },
        {
          "SL NO": "5",
          "CLIENT NAME": "Ajmera Housing Corporation",
          "PROJECT": "Ajmera Nucleus",
          "ADDRESS": "Electronic City",
          "LOAD in kVA": "100"
        },
        {
          "SL NO": "6",
          "CLIENT NAME": "Mantri Developers Pvt Ltd",
          "PROJECT": "Mantri Energia",
          "ADDRESS": "Nagavara, Bangalore",
          "LOAD in kVA": "950"
        },
        {
          "SL NO": "7",
          "CLIENT NAME": "B.S.N HARI AND OTHERS",
          "PROJECT": "Mantri Webcity Parcel 2",
          "ADDRESS": "Hennur Road, Bangalore",
          "LOAD in kVA": "900"
        },
        {
          "SL NO": "8",
          "CLIENT NAME": "Mantri Developers Pvt Ltd",
          "PROJECT": "Mantri Centrum",
          "ADDRESS": "Malleshwaram, Bangalore",
          "LOAD in kVA": "900"
        }
      ],
      "GOVERNMENT_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Whitefield Division",
          "ADDRESS": "Hoody, Whitefield, Bangalore",
          "DESCRIPTION": "11kv HT/LT UG Cable faults in Whitefield Division",
          "YEAR OF EXECUTION": "2024 - 2025"
        },
        {
          "SL NO": "2",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Shivajinagar Division",
          "ADDRESS": "Nandi Durga Road, Bangalore",
          "DESCRIPTION": "11kv HT/LT UG Cable faults in Shivajinagar Division",
          "YEAR OF EXECUTION": "2024 - 2025"
        },
        {
          "SL NO": "3",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Indiranagar Division",
          "ADDRESS": "Indiranagar, Bangalore",
          "DESCRIPTION": "11kv HT/LT UG Cable faults in Indiranagar Division",
          "YEAR OF EXECUTION": "2024 - 2025"
        },
        {
          "SL NO": "4",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Vidhanasoudha Division",
          "ADDRESS": "Crescent Road, Bangalore",
          "DESCRIPTION": "11kv HT/LT UG Cable faults in Vidhanasoudha Division",
          "YEAR OF EXECUTION": "2024 - 2025"
        },
        {
          "SL NO": "5",
          "CLIENT NAME": "Independence Day",
          "PROJECT": "Maneskshaw Parade Ground",
          "ADDRESS": "Bangalore",
          "DESCRIPTION": "BESCOM, CEIG Approvals, Supply, Installation, Testing & Commissioning of Light Fixtures, Temporary panels and LT Cables.",
          "YEAR OF EXECUTION": "2024"
        },
        {
          "SL NO": "6",
          "CLIENT NAME": "Republic Day",
          "PROJECT": "Maneskshaw Parade Ground",
          "ADDRESS": "Bangalore",
          "DESCRIPTION": "BESCOM, CEIG Approvals, Supply, Installation, Testing & Commissioning of Light Fixtures, Temporary panels and LT Cables.",
          "YEAR OF EXECUTION": "2024"
        }
      ]
    }
  ],
  "completed": [
    {
      "EHV_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "DESCRIPTION": "Increasing Vertical Clearance by providing 66kV DC towers with drake conductor \n    and dismandling the existing 66kV SC coyote conductor",
          "ADDRESS": "Jalahalli Main Road, Bangalore",
          "LOAD in kVA": "1000",
          "YEAR OF EXECUTION": "2021"
        }
      ],
      "LT_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "R JAYAVELU AND OTHERS",
          "PROJECT": "Prestige Elysian",
          "ADDRESS": "Hulimavu Village, Bangalore",
          "LOAD in kVA": "3263",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "2",
          "CLIENT NAME": "SHARADA DEVI AND OTHERS",
          "PROJECT": "Prestige Fairfield",
          "ADDRESS": "Sanjaynagar, Bangalore",
          "LOAD in kVA": "1452",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "3",
          "CLIENT NAME": "Mrs. Shamin Lahari & Others",
          "PROJECT": "Prestige Mulbery Shades",
          "ADDRESS": "Nandi Hills, Bangalore",
          "LOAD in kVA": "941",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "4",
          "CLIENT NAME": "N Gopalaiah & Others",
          "PROJECT": "Presige Marigold",
          "ADDRESS": "Devanahalli, Bangalore",
          "LOAD in kVA": "4393",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "5",
          "CLIENT NAME": "INR Property Holdings",
          "PROJECT": "Prestige Willow Tree",
          "ADDRESS": "Narasipura Village, Vidyaranyapura, Bangalore",
          "LOAD in kVA": "2751",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "6",
          "CLIENT NAME": "NAVEEN P GOWDA",
          "PROJECT": "Prestige Dolce Vita",
          "ADDRESS": "Pattandur Agrahara Village, Bangalore",
          "LOAD in kVA": "649",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "7",
          "CLIENT NAME": "NAVEEN P GOWDA",
          "PROJECT": "Prestige Fountain Blu",
          "ADDRESS": "Pattandur Agrahara Village, Bangalore",
          "LOAD in kVA": "594",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "8",
          "CLIENT NAME": "Syeda Bibi Sadiqa",
          "PROJECT": "Prestige Park Square",
          "ADDRESS": "Basravanpura Village, Bangalore",
          "LOAD in kVA": "3827",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "9",
          "CLIENT NAME": "Prestige Kamanhalli Investments",
          "PROJECT": "Prestige North Point",
          "ADDRESS": "Kammanahalli Road, Bangalore",
          "LOAD in kVA": "1582",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "10",
          "CLIENT NAME": "Trishul Buildtech & Infrastructure Pvt Ltd",
          "PROJECT": "Prestige Park Drive",
          "ADDRESS": "Devanahalli, Bangalore",
          "LOAD in kVA": "2798",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "11",
          "CLIENT NAME": "Anil Kumar Amrithlal",
          "PROJECT": "Prestige Kenilworth",
          "ADDRESS": "Cunningham Crescent Road, Bangalore",
          "LOAD in kVA": "840",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "12",
          "CLIENT NAME": "Jindal Aluminium Limited",
          "PROJECT": "Prestige Jindal City",
          "ADDRESS": "Nelamangala, Bangalore",
          "LOAD in kVA": "17900",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "13",
          "CLIENT NAME": "Bhartiya Urban Pvt Ltd",
          "PROJECT": "Nikoo 2",
          "ADDRESS": "Chokkanahalli Village, Bangalore",
          "LOAD in kVA": "8235",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "14",
          "CLIENT NAME": "C V Jayram",
          "PROJECT": "Vaishnavi Oasis",
          "ADDRESS": "Uttrahalli, Bangalore",
          "LOAD in kVA": "1720",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "15",
          "CLIENT NAME": "Urbanize Developers India Pvt Ltd",
          "PROJECT": "Prestige Song of the South",
          "ADDRESS": "Chandrashekarapura Village, Bangalore",
          "LOAD in kVA": "7335",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "16",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Craig Park Road",
          "ADDRESS": "Craig Park Road, M G Road, Bangalore.",
          "LOAD in kVA": "",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "17",
          "CLIENT NAME": "Anushka Investments",
          "PROJECT": "Prestige Lake Ridge",
          "ADDRESS": "Uttarahalli Hobli, Bangalore",
          "LOAD in kVA": "7089",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "18",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Gardenia",
          "ADDRESS": "T. Dasarahalli Village, Bangalore",
          "LOAD in kVA": "3921",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "19",
          "CLIENT NAME": "Anushka Estates",
          "PROJECT": "Prestige Pine Wood",
          "ADDRESS": "Srinivagilu Village, Bangalore",
          "LOAD in kVA": "1998",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "20",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Prestige Boulevard",
          "ADDRESS": "ECC Road, Whitefield, Bangalore.",
          "LOAD in kVA": "1081",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "21",
          "CLIENT NAME": "Mohammed Moosa Sait Wakf",
          "PROJECT": "Prestige Central",
          "ADDRESS": "Infantry Road, Bangalore",
          "LOAD in kVA": "1953",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "22",
          "CLIENT NAME": "M/s ACQUA BOREWELLS (P) LTD",
          "PROJECT": "Prestige Falcon Tower",
          "ADDRESS": "Brunton Road, Bangalore",
          "LOAD in kVA": "865",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "23",
          "CLIENT NAME": "Prestige Trishul Buildtech & Infrastructure Pvt Ltd",
          "PROJECT": "Prestige Lakeside Habitat",
          "ADDRESS": "Varthur Hobli, Bangalore",
          "LOAD in kVA": "13491",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "24",
          "CLIENT NAME": "Prestige South City Holdings",
          "PROJECT": "Prestige Gulmohar",
          "ADDRESS": "Horamavu, Bangalore",
          "LOAD in kVA": "1998",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "25",
          "CLIENT NAME": "Ajmera Housing Corporation",
          "PROJECT": "Ajmera Annex",
          "ADDRESS": "Begur Hobli, Bangalore",
          "LOAD in kVA": "660",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "26",
          "CLIENT NAME": "Valdel Sunshine Realty Pvt Ltd",
          "PROJECT": "Prestige Woodside",
          "ADDRESS": "Sy No: 66 & 70, Avalahalli Village, Bangalore.",
          "LOAD in kVA": "1879",
          "YEAR OF EXECUTION": "2018"
        },
        {
          "SL NO": "27",
          "CLIENT NAME": "Sri Dhanalakshmi & Meerabai",
          "PROJECT": "Prestige Sunrise Park",
          "ADDRESS": "Gollahalli Village, Electronic City, Bangalore",
          "LOAD in kVA": "4544",
          "YEAR OF EXECUTION": "2018"
        },
        {
          "SL NO": "28",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Prestige Augusta Golf Village",
          "ADDRESS": "Vederahalli Village, Bangalore",
          "LOAD in kVA": "5264",
          "YEAR OF EXECUTION": "2018"
        },
        {
          "SL NO": "29",
          "CLIENT NAME": "United Breweries Holdings Limited",
          "PROJECT": "Presite Kingfisher Towers",
          "ADDRESS": "Vittal Mallya Road, Bangalore",
          "LOAD in kVA": "1939",
          "YEAR OF EXECUTION": "2018"
        },
        {
          "SL NO": "30",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Prestige Edwardian",
          "ADDRESS": "Edward Road, Bangalore",
          "LOAD in kVA": "988",
          "YEAR OF EXECUTION": "2017"
        },
        {
          "SL NO": "31",
          "CLIENT NAME": "Prestige South City Holdings",
          "PROJECT": "Prestige Misty Waters",
          "ADDRESS": "Kempapura Village",
          "LOAD in kVA": "3833",
          "YEAR OF EXECUTION": "2017"
        },
        {
          "SL NO": "32",
          "CLIENT NAME": "H.A. Leenatha & Others",
          "PROJECT": "Prestige Park View",
          "ADDRESS": "Hopefarm, Whitefield, Bangalore",
          "LOAD in kVA": "3307",
          "YEAR OF EXECUTION": "2016"
        },
        {
          "SL NO": "33",
          "CLIENT NAME": "Mohammed Fakhruddin Ajmal",
          "PROJECT": "Prestige Mayberry",
          "ADDRESS": "Whitefield, Bangalore",
          "LOAD in kVA": "1928",
          "YEAR OF EXECUTION": "2015"
        },
        {
          "SL NO": "34",
          "CLIENT NAME": "Karle Homes Pvt Ltd",
          "PROJECT": "Karle Homes Pvt. Ltd",
          "ADDRESS": "Nagawara Village, Bangalore",
          "LOAD in kVA": "1941",
          "YEAR OF EXECUTION": "2015"
        },
        {
          "SL NO": "35",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Prestige Oasis",
          "ADDRESS": "Rajankunte Village, Bangalore",
          "LOAD in kVA": "2000",
          "YEAR OF EXECUTION": "2011"
        }
      ],
      "HT_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "Prestige Whitefield Investments & Developers LLP",
          "PROJECT": "Prestige Techno Star",
          "ADDRESS": "Doddanakundi Industrial Area, Bangalore",
          "LOAD in kVA": "7000",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "2",
          "CLIENT NAME": "Prestige Realty Ventures",
          "PROJECT": "Prestige Tech Cloud                   (Tower 1,2,3 & 7)",
          "ADDRESS": "Navarathana Agrahara, Bangalore",
          "LOAD in kVA": "2000",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "3",
          "CLIENT NAME": "Prestige Realty Ventures",
          "PROJECT": "Moxy Hotel",
          "ADDRESS": "Navarathana Agrahara, Bangalore",
          "LOAD in kVA": "2000",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "4",
          "CLIENT NAME": "Bharathi Nahender & Others",
          "PROJECT": "Prestige Summit",
          "ADDRESS": "St Johns Road, Bangalore",
          "LOAD in kVA": "1000",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "5",
          "CLIENT NAME": "Jindal Aluminium Limited",
          "PROJECT": "Prestige Jindal School",
          "ADDRESS": "Nelamangala, Bangalore",
          "LOAD in kVA": "400",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "6",
          "CLIENT NAME": "Vaishnavi Properties",
          "PROJECT": "Vaishnavi Silicon Traces",
          "ADDRESS": "Koramangala, Bangalore",
          "LOAD in kVA": "600",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "7",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Signature",
          "ADDRESS": "Sarjapur Road, Bangalore",
          "LOAD in kVA": "1951",
          "YEAR OF EXECUTION": "2023"
        },
        {
          "SL NO": "8",
          "CLIENT NAME": "Adobe Systems I Pvt Ltd",
          "PROJECT": "Prestige Tech Park 4",
          "ADDRESS": "Bellandur Village, Bangalore",
          "LOAD in kVA": "1450",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "9",
          "CLIENT NAME": "Dashanya Tech Parkz Pvt Ltd",
          "PROJECT": "Prestige Tech Park 4",
          "ADDRESS": "Bellandur Village, Bangalore",
          "LOAD in kVA": "1450",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "10",
          "CLIENT NAME": "INR Property Holdings",
          "PROJECT": "Prestige Willow Tree",
          "ADDRESS": "Narsapura Village, Bangalore",
          "LOAD in kVA": "2338",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "11",
          "CLIENT NAME": "Mohammed Moosa Sait Wakf",
          "PROJECT": "Prestige Minsk Square",
          "ADDRESS": "Cubbon Road, Bangalore",
          "LOAD in kVA": "4138",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "12",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Raphsody",
          "ADDRESS": "Cook Town, Bangalore",
          "LOAD in kVA": "83",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "13",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Serene",
          "ADDRESS": "Ananthpura Village, Bangalore",
          "LOAD in kVA": "3436",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "14",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Sovereign",
          "ADDRESS": "Bellandur Village, Bangalore",
          "LOAD in kVA": "800",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "15",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Tech Park",
          "ADDRESS": "Ambalipura Village, Bangalore",
          "LOAD in kVA": "5800",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "16",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Tech Square",
          "ADDRESS": "Ambalipura Village, Bangalore",
          "LOAD in kVA": "2840",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "17",
          "CLIENT NAME": "Bhartiya Urban Pvt Ltd",
          "PROJECT": "Hotel Block 2",
          "ADDRESS": "Chokkanahalli Village, Bangalore",
          "LOAD in kVA": "2000",
          "YEAR OF EXECUTION": "2022"
        },
        {
          "SL NO": "18",
          "CLIENT NAME": "Kapur Investments Pvt Ltd",
          "PROJECT": "Prestige Rex",
          "ADDRESS": "Bridage Road, Bangalore",
          "LOAD in kVA": "1000",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "19",
          "CLIENT NAME": "The Secretary Muslim Orphanage",
          "PROJECT": "Muslim Orphanage",
          "ADDRESS": "Timmaiah Road, Bangalore",
          "LOAD in kVA": "375",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "20",
          "CLIENT NAME": "Jindal Aluminium Limited",
          "PROJECT": "Prestige Jindal City",
          "ADDRESS": "Nelamangala, Bangalore",
          "LOAD in kVA": "250",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "21",
          "CLIENT NAME": "Chaman Bhartiya Foundation",
          "PROJECT": "Chaman Bharatiya School",
          "ADDRESS": "Thanisandra Main Rd, Bangalore",
          "LOAD in kVA": "150",
          "YEAR OF EXECUTION": "2021"
        },
        {
          "SL NO": "22",
          "CLIENT NAME": "M/s Chaithanya Properties Pvt Ltd",
          "PROJECT": "Sheraton Hotel",
          "ADDRESS": "ITPL Main Road, Whitefield, Bangalore",
          "LOAD in kVA": "2000",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "23",
          "CLIENT NAME": "Prestige City Properties",
          "PROJECT": "Prestige Star Tech",
          "ADDRESS": "Industrial Layout, Koramangala, Bangalore",
          "LOAD in kVA": "7000",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "24",
          "CLIENT NAME": "C N Govindraju",
          "PROJECT": "Vaishnavi Ikon",
          "ADDRESS": "Richmond Road, Bangalore",
          "LOAD in kVA": "450",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "25",
          "CLIENT NAME": "Manyata Promoters Pvt Ltd",
          "PROJECT": "Manyata A Parcel Block",
          "ADDRESS": "Nagawara, Bangalore",
          "LOAD in kVA": "5458",
          "YEAR OF EXECUTION": "2020"
        },
        {
          "SL NO": "26",
          "CLIENT NAME": "M/S. KHODAY ESHWARSA & SONS",
          "PROJECT": "Prestige Falcon City",
          "ADDRESS": "Konankunte Village, Kanakapura Main Road, Uttarahalli, Bangalore",
          "LOAD in kVA": "7400",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "27",
          "CLIENT NAME": "Vaishnavi Infrastructure Pvt Ltd",
          "PROJECT": "Vaishnavi Meredian",
          "ADDRESS": "Plain Street, Bangalore",
          "LOAD in kVA": "325",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "28",
          "CLIENT NAME": "Ajmera Housing Corporation",
          "PROJECT": "Ajmera Annex",
          "ADDRESS": "Begur Hobli, Bangalore",
          "LOAD in kVA": "561",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "29",
          "CLIENT NAME": "Cessna Garden Developers Pvt. Ltd",
          "PROJECT": "Cessna Business Park (B10)",
          "ADDRESS": "Bangalore",
          "LOAD in kVA": "3350",
          "YEAR OF EXECUTION": "2019"
        },
        {
          "SL NO": "30",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Prestige Augusta Golf Village",
          "ADDRESS": "Vederahalli Village, Bangalore",
          "LOAD in kVA": "245",
          "YEAR OF EXECUTION": "2018"
        },
        {
          "SL NO": "31",
          "CLIENT NAME": "Smt. Kamalavadani Udayakumar",
          "PROJECT": "Prestige VST Tower",
          "ADDRESS": "MG Road, Bangalore",
          "LOAD in kVA": "746",
          "YEAR OF EXECUTION": "2016"
        },
        {
          "SL NO": "32",
          "CLIENT NAME": "PRESTIGE ESTATES PROJECTS LTD",
          "PROJECT": "Prestige Khodays",
          "ADDRESS": "Rajbhavan Road, Bangalore",
          "LOAD in kVA": "1116",
          "YEAR OF EXECUTION": "2014"
        },
        {
          "SL NO": "33",
          "CLIENT NAME": "Exora Business Parks Pvt Ltd",
          "PROJECT": "Exora Business Park",
          "ADDRESS": "Marathahalli, Ringroad, Bangalore",
          "LOAD in kVA": "1998",
          "YEAR OF EXECUTION": "2011"
        }
      ],
      "GOVERNMENT_WORKS": [
        {
          "SL NO": "1",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Whitefield Division",
          "ADDRESS": "Hoody, Whitefield, Bangalore",
          "DESCRIPTION": "11kv HT UG Cable faults in Whitefield Division",
          "YEAR OF EXECUTION": "2021 - 2023"
        },
        {
          "SL NO": "2",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Shivajinagar Division",
          "ADDRESS": "Nandi Durga Road, Bangalore",
          "DESCRIPTION": "11kv HT UG Cable faults in Shivajinagar Division",
          "YEAR OF EXECUTION": "2021 - 2023"
        },
        {
          "SL NO": "3",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Indiranagar Division",
          "ADDRESS": "Indiranagar, Bangalore",
          "DESCRIPTION": "11kv HT UG Cable faults in Indiranagar Division",
          "YEAR OF EXECUTION": "2021 - 2023"
        },
        {
          "SL NO": "4",
          "CLIENT NAME": "Bescom",
          "PROJECT": "Vidhanasoudha Division",
          "ADDRESS": "Crescent Road, Bangalore",
          "DESCRIPTION": "11kv HT UG Cable faults in Vidhanasoudha Division",
          "YEAR OF EXECUTION": "2021 - 2023"
        },
        {
          "SL NO": "5",
          "CLIENT NAME": "Independence Day",
          "PROJECT": "Maneskshaw Parade Ground",
          "ADDRESS": "Bangalore",
          "DESCRIPTION": "BESCOM, CEIG Approvals, Supply, Installation, Testing & Commissioning of Light Fixtures, Temporary panels and LT Cables.",
          "YEAR OF EXECUTION": "2005 - 2023"
        },
        {
          "SL NO": "6",
          "CLIENT NAME": "Republic Day",
          "PROJECT": "Maneskshaw Parade Ground",
          "ADDRESS": "Bangalore",
          "DESCRIPTION": "BESCOM, CEIG Approvals, Supply, Installation, Testing & Commissioning of Light Fixtures, Temporary panels and LT Cables.",
          "YEAR OF EXECUTION": "2005 - 2023"
        }
      ]
    }
  ]
}

const workTypeOptions = [
  { value: "EHV_WORKS", label: "EHV Works", color: "bg-purple-100 text-purple-800 border-purple-200" },
  { value: "HT_WORKS", label: "HT Works", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { value: "LT_WORKS", label: "LT Works", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "GOVERNMENT_WORKS", label: "Government Works", color: "bg-orange-100 text-orange-800 border-orange-200" },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedWorkType, setSelectedWorkType] = useState<WorkType>("EHV_WORKS" as WorkType);
  const [activeTab, setActiveTab] = useState("ongoing")

  const getProjectsForWorkType = (status: "ongoing" | "completed", workType: WorkType) => {
    const statusData = projectsData[status]
    if (statusData && statusData[0] && statusData[0][workType]) {
      return statusData[0][workType]
    }
    return []
  }

  const filteredProjects = (projects: any[]) => {
    return projects.filter((project) => {
      const searchFields = [
        project.PROJECT,
        project["CLIENT NAME"],
        project.DESCRIPTION,
        project.LOCATION,
        project.ADDRESS,
      ].filter(Boolean)

      return searchFields.some((field) => field && field.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }

  const getWorkTypeColor = (workType: string) => {
    const option = workTypeOptions.find((opt) => opt.value === workType)
    return option ? option.color : "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getWorkTypeLabel = (workType: string) => {
    const option = workTypeOptions.find((opt) => opt.value === workType)
    return option ? option.label : workType
  }

  const renderProjectTable = (projects: any[], status: "ongoing" | "completed") => {
    if (projects.length === 0) {
      return (
        <div className="text-center py-12">
          <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Projects Found</h3>
          <p className="text-gray-500">
            No {status} {getWorkTypeLabel(selectedWorkType).toLowerCase()} projects available.
          </p>
        </div>
      )
    }

    // EHV Works Table
    if (selectedWorkType === "EHV_WORKS") {
      return (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-16 font-semibold text-[#002D62]">SL NO</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">PROJECT/CLIENT</TableHead>
              <TableHead className="min-w-[300px] font-semibold text-[#002D62]">DESCRIPTION</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">LOCATION</TableHead>
              {projects.some((p) => p["LOAD in kVA"]) && (
                <TableHead className="w-24 font-semibold text-[#002D62]">LOAD</TableHead>
              )}
              {status === "completed" && <TableHead className="w-24 font-semibold text-[#002D62]">YEAR</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100">
                <TableCell className="font-medium text-center text-[#002D62]">{project["SL NO"]}</TableCell>
                <TableCell>
                  <div className="font-semibold text-[#002D62] mb-1">{project.PROJECT || project["CLIENT NAME"]}</div>
                  {project["CLIENT NAME"] && project.PROJECT && (
                    <div className="text-sm text-gray-600">{project["CLIENT NAME"]}</div>
                  )}
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600 leading-relaxed">{project.DESCRIPTION}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#FFB000] mr-1 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{project.LOCATION || project.ADDRESS}</span>
                  </div>
                </TableCell>
                {projects.some((p) => p["LOAD in kVA"]) && (
                  <TableCell>
                    {project["LOAD in kVA"] && (
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 text-[#FFB000] mr-1" />
                        <span className="font-medium text-sm">{project["LOAD in kVA"]} kVA</span>
                      </div>
                    )}
                  </TableCell>
                )}
                {status === "completed" && (
                  <TableCell>
                    {project["YEAR OF EXECUTION"] && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-[#FFB000] mr-1" />
                        <span className="font-medium text-sm">{project["YEAR OF EXECUTION"]}</span>
                      </div>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    // HT/LT Works Table
    if (selectedWorkType === "HT_WORKS" || selectedWorkType === "LT_WORKS") {
      return (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-16 font-semibold text-[#002D62]">SL NO</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">CLIENT NAME</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">PROJECT</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">ADDRESS</TableHead>
              <TableHead className="w-24 font-semibold text-[#002D62]">LOAD</TableHead>
              {status === "completed" && <TableHead className="w-24 font-semibold text-[#002D62]">YEAR</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100">
                <TableCell className="font-medium text-center text-[#002D62]">{project["SL NO"]}</TableCell>
                <TableCell>
                  <div className="font-semibold text-[#002D62]">{project["CLIENT NAME"]}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-gray-900">{project.PROJECT}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#FFB000] mr-1 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{project.ADDRESS}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-[#FFB000] mr-1" />
                    <span className="font-medium text-sm">{project["LOAD in kVA"]} kVA</span>
                  </div>
                </TableCell>
                {status === "completed" && (
                  <TableCell>
                    {project["YEAR OF EXECUTION"] && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-[#FFB000] mr-1" />
                        <span className="font-medium text-sm">{project["YEAR OF EXECUTION"]}</span>
                      </div>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    // Government Works Table
    if (selectedWorkType === "GOVERNMENT_WORKS") {
      return (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-16 font-semibold text-[#002D62]">SL NO</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">CLIENT NAME</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">PROJECT</TableHead>
              <TableHead className="min-w-[200px] font-semibold text-[#002D62]">ADDRESS</TableHead>
              <TableHead className="min-w-[300px] font-semibold text-[#002D62]">DESCRIPTION</TableHead>
              <TableHead className="w-32 font-semibold text-[#002D62]">EXECUTION PERIOD</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100">
                <TableCell className="font-medium text-center text-[#002D62]">{project["SL NO"]}</TableCell>
                <TableCell>
                  <div className="font-semibold text-[#002D62]">{project["CLIENT NAME"]}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-gray-900">{project.PROJECT}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#FFB000] mr-1 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{project.ADDRESS}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600 leading-relaxed">{project.DESCRIPTION}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-[#FFB000] mr-1" />
                    <span className="font-medium text-sm">{project["YEAR OF EXECUTION"]}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    return null
  }

  const currentProjects = getProjectsForWorkType(activeTab as "ongoing" | "completed", selectedWorkType)
  const filteredCurrentProjects = filteredProjects(currentProjects)

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#002D62] to-[#004080] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-[#FFB000]/20 text-[#FFB000] border-[#FFB000]/30 mb-6">
                Our Portfolio
              </Badge>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">Our Projects</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Comprehensive overview of our electrical projects across Karnataka, from EHV substations to government
                infrastructure, showcasing 40+ years of expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-poppins font-semibold text-lg text-[#002D62] flex items-center">
                        <Filter className="w-5 h-5 mr-2" />
                        Filters
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Work Type</label>
                        <Select value={selectedWorkType} onValueChange={(value: string) => setSelectedWorkType(value as WorkType)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {workTypeOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Search Projects</label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            placeholder="Search by name, location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Current Selection Info */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-poppins font-semibold text-lg text-[#002D62]">Current View</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Badge variant="secondary" className={`${getWorkTypeColor(selectedWorkType)} text-sm`}>
                          {getWorkTypeLabel(selectedWorkType)}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          Showing {filteredCurrentProjects.length} {activeTab} project
                          {filteredCurrentProjects.length !== 1 ? "s" : ""}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="ongoing" className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Ongoing Projects</span>
                    </TabsTrigger>
                    <TabsTrigger value="completed" className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Completed Projects</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="ongoing">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="font-poppins font-semibold text-xl text-[#002D62] flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-green-600" />
                          Ongoing {getWorkTypeLabel(selectedWorkType)}
                        </CardTitle>
                        <CardDescription>Current active projects in various stages of completion</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">{renderProjectTable(filteredCurrentProjects, "ongoing")}</div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="completed">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="font-poppins font-semibold text-xl text-[#002D62] flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                          Completed {getWorkTypeLabel(selectedWorkType)}
                        </CardTitle>
                        <CardDescription>
                          Successfully delivered projects showcasing our expertise and reliability
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          {renderProjectTable(filteredCurrentProjects, "completed")}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
