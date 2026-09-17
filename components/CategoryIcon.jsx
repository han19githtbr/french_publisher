import {
  Sparkles,
  MessageCircleQuestion,
  AlertTriangle,
  Ear,
  Gem,
  Trophy,
  CircleHelp,
  Puzzle,
  ShieldAlert,
} from "lucide-react";

const MAP = {
  Sparkles,
  MessageCircleQuestion,
  AlertTriangle,
  Ear,
  Gem,
  Trophy,
  CircleHelp,
  Puzzle,
  ShieldAlert,
};

export function iconFor(name) {
  return MAP[name] || Sparkles;
}

export default function CategoryIcon({ name, size = 18, ...props }) {
  const Icon = iconFor(name);
  return <Icon size={size} {...props} />;
}
