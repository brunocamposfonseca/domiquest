"use client"
import Pieces from "../components/Piece"
import { LogoutIcon } from "../components/icons/Logout"
import { MicMutedIcon } from "../components/icons/MicMuted"
import { SearchIcon } from "../components/icons/Search"
import Group from "../../services/GroupPiece";
import GroupPiece from "../../services/GroupPiece"

export default function playing(){
    return(
        <div className="relative w-full h-full bg-gradient-to-r from-[#507F28] to-[#5FC20E] p-6">
            <div className="flex-1">
                <div className="w-full sticky z-10 flex items-center justify-between">
                    <div className="flex gap-4 items-baseline">
                        <img src="/logo.svg" className="w-40" />
                        <LogoutIcon />
                    </div>
                    <div>
                        <h1 className="text-white text-2xl font-bold">Round: {sessionStorage.getItem("round")}/5</h1>
                    </div>
                </div>
                <div>
                    <GroupPiece />
                </div>
                <div className="fixed bottom-0 left-0 right-0 z-10 bg-[#yourBackgroundColor] p-6 flex justify-between">
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-[#92CE61] py-2 px-3 rounded-md">
                            <div className="flex gap-2 items-center w-60">
                                <SearchIcon/>
                                <input type="input" placeholder="Send a message" className="bg-transparent w-full text-white placeholder:text-[#CBE7BD]"/>
                            </div>
                        </div>
                        <button className="w-10 h-10 flex items-center justify-center transition-all bg-[#6E9F45] hover:bg-[#82be52] rounded-md">
                            <MicMutedIcon />
                        </button>
                    </div>
                    <div className="flex gap-2 flex-row-reverse items-center">
                        <div className="w-14 h-14 bg-white rounded-full"></div>
                        <div className="flex flex-col items-end gap-1">
                            <h2 className="text-white text-xl/5 font-bold">{sessionStorage.getItem("user")}</h2>
                            <p className="text-white text-sm/[14px]">{sessionStorage.getItem("score")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}