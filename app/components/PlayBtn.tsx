"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlayBtn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    user: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem("nome", formData.nome);
    sessionStorage.setItem("user", formData.user);
    sessionStorage.setItem("score", "0");
    sessionStorage.setItem("round", "1");
    router.push("/playing");
  };

  return (
    <Dialog>
      <DialogTrigger className="transition-all flex items-center font-bold py-2 cursor-pointer px-5 w-[80px] justify-center text-[#507F28] bg-[#B1FF89] rounded-md hover:bg-[#507F28] hover:text-white">
        Play
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#ffffff] border-none">
        <DialogHeader>
          <DialogTitle className="text-[#25420c] text-2xl">Enter Server</DialogTitle>
          <DialogDescription className="text-black">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nome" className="text-right text-black">
                Name
              </Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                autoFocus
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="user" className="text-right text-black">
                Username
              </Label>
              <Input
                id="user"
                name="user"
                value={formData.user}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#507F28]">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
