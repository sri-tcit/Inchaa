"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell, FileText, LayoutTemplate, MessageSquare, CreditCard } from "lucide-react";

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3.84922 8.6201C3.70326 7.96262 3.72567 7.27894 3.91437 6.63244C4.10308 5.98593 4.45196 5.39754 4.92868 4.92182C5.40541 4.4461 5.99453 4.09844 6.64142 3.91109C7.28832 3.72374 7.97205 3.70276 8.62922 3.8501C8.99093 3.2844 9.48922 2.81886 10.0782 2.49638C10.6671 2.17391 11.3278 2.00488 11.9992 2.00488C12.6707 2.00488 13.3313 2.17391 13.9203 2.49638C14.5092 2.81886 15.0075 3.2844 15.3692 3.8501C16.0274 3.70212 16.7123 3.72301 17.3602 3.91081C18.0081 4.09862 18.598 4.44724 19.0751 4.92425C19.5521 5.40126 19.9007 5.99117 20.0885 6.6391C20.2763 7.28703 20.2972 7.97193 20.1492 8.6301C20.7149 8.99181 21.1805 9.4901 21.5029 10.079C21.8254 10.668 21.9944 11.3286 21.9944 12.0001C21.9944 12.6715 21.8254 13.3322 21.5029 13.9211C21.1805 14.5101 20.7149 15.0084 20.1492 15.3701C20.2966 16.0273 20.2756 16.711 20.0882 17.3579C19.9009 18.0048 19.5532 18.5939 19.0775 19.0706C18.6018 19.5473 18.0134 19.8962 17.3669 20.0849C16.7204 20.2736 16.0367 20.2961 15.3792 20.1501C15.018 20.718 14.5193 21.1855 13.9293 21.5094C13.3394 21.8333 12.6772 22.0032 12.0042 22.0032C11.3312 22.0032 10.669 21.8333 10.0791 21.5094C9.48914 21.1855 8.99045 20.718 8.62922 20.1501C7.97205 20.2974 7.28832 20.2765 6.64142 20.0891C5.99453 19.9018 5.40541 19.5541 4.92868 19.0784C4.45196 18.6027 4.10308 18.0143 3.91437 17.3678C3.72567 16.7213 3.70326 16.0376 3.84922 15.3801C3.27917 15.0193 2.80963 14.5203 2.48426 13.9293C2.1589 13.3384 1.98828 12.6747 1.98828 12.0001C1.98828 11.3255 2.1589 10.6618 2.48426 10.0709C2.80963 9.47992 3.27917 8.98085 3.84922 8.6201Z" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 12L11 14L15 10" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Verified Professionals",
        description: "Access contractors, and consultants with verified credentials."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.3008 21C10.4682 21.3044 10.7142 21.5583 11.0133 21.7352C11.3123 21.912 11.6534 22.0053 12.0008 22.0053C12.3482 22.0053 12.6892 21.912 12.9883 21.7352C13.2873 21.5583 13.5334 21.3044 13.7008 21" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Real-time Notifications",
        description: "Stay informed with instant updates on quotes and project status."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 12V18" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 15L12 12L9 15" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Secure Document Uploads",
        description: "Upload and share project documents with end-to-end security."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 17V9" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 17V5" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 17V14" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Quote Comparison",
        description: "Compare quotations side-by-side with transparent pricing."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.525 2.29502C11.5688 2.20648 11.6365 2.13195 11.7204 2.07984C11.8044 2.02773 11.9012 2.00012 12 2.00012C12.0988 2.00012 12.1956 2.02773 12.2795 2.07984C12.3634 2.13195 12.4311 2.20648 12.475 2.29502L14.785 6.97402C14.9371 7.28198 15.1618 7.54842 15.4396 7.75047C15.7174 7.95251 16.0401 8.08413 16.38 8.13402L21.546 8.89002C21.6439 8.9042 21.7358 8.94549 21.8115 9.00921C21.8871 9.07294 21.9434 9.15656 21.974 9.25062C22.0046 9.34468 22.0082 9.44542 21.9846 9.54145C21.9609 9.63748 21.9108 9.72497 21.84 9.79402L18.104 13.432C17.8576 13.6721 17.6732 13.9685 17.5668 14.2956C17.4604 14.6228 17.435 14.9709 17.493 15.31L18.375 20.45C18.3922 20.5479 18.3817 20.6486 18.3445 20.7407C18.3073 20.8328 18.2449 20.9126 18.1645 20.971C18.0841 21.0294 17.9889 21.064 17.8898 21.0709C17.7907 21.0778 17.6917 21.0567 17.604 21.01L12.986 18.582C12.6817 18.4222 12.3431 18.3388 11.9995 18.3388C11.6558 18.3388 11.3173 18.4222 11.013 18.582L6.39597 21.01C6.3083 21.0564 6.20937 21.0773 6.11042 21.0703C6.01147 21.0632 5.91649 21.0286 5.83626 20.9702C5.75604 20.9119 5.6938 20.8322 5.65662 20.7402C5.61945 20.6483 5.60883 20.5477 5.62597 20.45L6.50697 15.311C6.56516 14.9717 6.53995 14.6234 6.43351 14.2961C6.32706 13.9687 6.14258 13.6722 5.89597 13.432L2.15997 9.79502C2.08856 9.72605 2.03796 9.63841 2.01393 9.54209C1.9899 9.44577 1.99341 9.34463 2.02405 9.25021C2.05469 9.15578 2.11124 9.07186 2.18725 9.008C2.26326 8.94414 2.35567 8.90291 2.45397 8.88902L7.61897 8.13402C7.95923 8.08451 8.28236 7.95307 8.56055 7.751C8.83875 7.54893 9.06367 7.28229 9.21597 6.97402L11.525 2.29502Z" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Ratings & Reviews",
        description: "Make informed decisions based on verified user feedback."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.07C11.7406 5.9983 11.4167 5.91525 11.1271 5.75824C10.8375 5.60123 10.5912 5.37512 10.41 5.1L9.59 3.9C9.40882 3.62488 9.1625 3.39877 8.8729 3.24176C8.58331 3.08475 8.25941 3.0017 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 19.1 2.9 20 4 20Z" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 10V14" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 10V12" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 10V16" stroke="#3743D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Project Management",
        description: "Track all your properties and projects in one dashboard."
    }
];

export function AllInOneGrid() {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm backdrop-blur-[10px] max-w-max">
                            <span className="text-center text-[#76797B] font-poppins text-sm font-normal leading-[1.5]">Features</span>
                        </div>
                    </div>
                    <h2 className="text-[#1D2030] text-center font-poppins text-[24px] md:text-[34px] font-bold leading-[130%] pb-[16px]">Everything You Need,
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(106deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] font-poppins text-[24px] md:text-[34px] font-bold leading-[130%]">
                            All in One Place</span></h2>
                    <p className="text-[#76797B] text-center font-poppins text-base font-normal leading-6">
                        Powerful tools designed to streamline your construction journey from start to finish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-[#FFFFFFB2] rounded-2xl border border-transparent  transition-all duration-300 grouprounded-[24px] border border-[rgba(255,255,255,0.4)] shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px]"
                            >
                                <div className="flex w-[48px] h-[48px] justify-center items-center rounded-[12px] bg-[rgba(60,73,221,0.1)] mb-[16px]">
                                    {
                                        feature.icon
                                    }
                                </div>
                                <h3 className="text-[#323232] font-poppins text-[18px] font-semibold leading-[130%] pb-[12px]">{feature.title}</h3>
                                <p className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%]">{feature.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
