// utils.ts
export const getTypeColor = (type: string): string => {
  switch (type.toLowerCase()) {
    case "normal":
      return "bg-gray-500";
    case "fighting":
      return "bg-red-700";
    case "flying":
      return "bg-blue-300";
    case "poison":
      return "bg-purple-500";
    case "ground":
      return "bg-yellow-700";
    case "rock":
      return "bg-gray-700";
    case "bug":
      return "bg-green-500";
    case "ghost":
      return "bg-purple-700";
    case "steel":
      return "bg-gray-400";
    case "fire":
      return "bg-red-500";
    case "water":
      return "bg-blue-500";
    case "grass":
      return "bg-green-300";
    case "electric":
      return "bg-yellow-500";
    case "psychic":
      return "bg-pink-500";
    case "ice":
      return "bg-blue-200";
    case "dragon":
      return "bg-purple-900";
    case "dark":
      return "bg-gray-900";
    case "fairy":
      return "bg-pink-300";
    default:
      return "bg-gray-500";
  }
};
