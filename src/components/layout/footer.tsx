import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, X, Linkedin, Mail, } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-card  border-t border-border">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                FutureLearn
                            </span>
                        </div>
                        <p className="text-muted-foreground">
                            Empowering the next generation of tech innovators with cutting-edge education and hands-on experience.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <X className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Mail className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Courses</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    AI & Machine Learning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Blockchain Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Quantum Computing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Cybersecurity
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Data Science
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
                        <p className="text-muted-foreground">Get the latest course updates and tech insights.</p>
                        <div className="space-y-2">
                            <Input placeholder="Enter your email" className="bg-background border-border focus:border-primary" />
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 FutureLearn Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
