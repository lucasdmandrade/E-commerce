import Produto1 from "../../../assets/produto-01.jpeg";
import Produto2 from "../../../assets/produto-02.jpeg";
import Produto3 from "../../../assets/produto-03.jpeg";
import Produto4 from "../../../assets/produto-04.jpeg";
import Produto5 from "../../../assets/produto-05.jpeg";
import Produto6 from "../../../assets/produto-06.jpeg";
import Produto7 from "../../../assets/produto-07.jpeg";
import Produto8 from "../../../assets/produto-08.jpeg";
import { IProducts } from "./types";

const products: IProducts[] = [
  {
    img: Produto1,
    title: "AirPods Apple Fones de ouvido",
    price: 1499.0,
    priceInstallmentsDetails: "Em até 12x de 124,92",
    priceAtSightDetails: "R$ 1.349 à vista (10% de desconto)",
  },
  {
    img: Produto2,
    title: "Capa de silicone para iPhone 8/7 com Areia - rosa",
    price: 299.0,
    priceInstallmentsDetails: "Em até 12x de 24,92",
    priceAtSightDetails: "R$ 269,10 à vista (10% de desconto)",
  },
  {
    img: Produto3,
    title: "Apple Pencil",
    price: 729.0,
    priceInstallmentsDetails: "Em até 12x de 60,75",
    priceAtSightDetails: "R$ 656,10 à vista (10% de desconto)",
  },
  {
    img: Produto4,
    title: "Magic Mouse 2 - Prateado",
    price: 549.0,
    priceInstallmentsDetails: "Em até 12x de 45,75",
    priceAtSightDetails: "R$ 491,10 à vista (10% de desconto)",
  },
  {
    img: Produto5,
    title: "Caixa prateada de alumínio com pulseira esportiva branca",
    price: 2899.0,
    priceInstallmentsDetails: "Em até 12x de 241,58",
    priceAtSightDetails: "R$ 2609,10 à vista (10% de desconto)",
  },
  {
    img: Produto6,
    title: "Cabo de lightning para USB (1m)",
    price: 149.0,
    priceInstallmentsDetails: "Em até 12x de 12,42",
    priceAtSightDetails: "R$ 134,10 à vista (10% de desconto)",
  },
  {
    img: Produto7,
    title: "Smart Keyboard para Ipad Pro 12,9 polegadas - inglês (EUA)",
    price: 1099.0,
    priceInstallmentsDetails: "Em até 12x de 91,58",
    priceAtSightDetails: "R$ 989,10 à vista (10% de desconto)",
  },
  {
    img: Produto8,
    title: "Carregador USB de 5W Apple",
    price: 149.0,
    priceInstallmentsDetails: "Em até 12x de 12,42",
    priceAtSightDetails: "R$ 134,10 à vista (10% de desconto)",
  },
];

export default products;
