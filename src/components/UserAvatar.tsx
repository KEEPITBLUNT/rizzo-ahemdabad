
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  imageUrl: string;
  name: string;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, name, className }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
