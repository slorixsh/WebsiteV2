import React from "react";
import MessageComponent from "../components/talk/MessageComponent";
import ContactLink from "../components/talk/ContactLink";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import GradientBar from "../components/GradientBar";
import TimeStatus from "../components/talk/TimeStatus";

const Talk = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Let's chat 💬</h1>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
                Need Friend? Feel free to contact with me. I need friends too lol.
            </p>

            <TimeStatus />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20">
                <MessageComponent />

                <div className="row-start-1 md:row-auto">
                    <ContactLink
                        name="slorixsh#0148"
                        icon={<SiDiscord className="w-6 h-6 text-[#5865F2]" />}
                        link="https://discord.com/users/831499138410610750"
                        borderColor="hover:border-[#5865F2]/50"
                    />

                    <ContactLink
                        name="@slorixsh"
                        icon={<SiTwitter className="w-6 h-6 text-[#1DA1F2]" />}
                        link="https://twitter.com/slorixsh"
                        borderColor="hover:border-[#1DA1F2]/50"
                    />

                    <ContactLink
                        name="slorixsh.mail"
                        icon={<FiMail className="w-6 h-6 text-gray-400" />}
                        link="mailto:tvicinyt@gmail.com"
                        borderColor="hover:border-gray-400/50"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Talk;
