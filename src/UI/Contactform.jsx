"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import NotificationBanner from "./Notificationbanner";  

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "Email must be valiid",
	}),
	messages: z.string().min(2, {
		message: "Message must be at least a character.",
	}),
});

const Contactform = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState(null);

	// form.
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "hi",
			email: "hello",
			messages: "wassgud",
		},
	});

	// submit handler.
	async function onSubmit(values) {
		console.log(values);
		try {
			setIsSubmitting(true);
			const templateParams = {
				from_name: values.name,
				from_email: values.email,
				message: values.messages,
				to_name: "Dolapo Araoye",
			};

			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			setNotification({
				type: "success",
				message: "Message sent successfully!",
			});
			form.reset();
		} catch (error) {
			setNotification({
				type: "error",
				message: "Failed to send message. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div>
			{notification && (
				<NotificationBanner
					type={notification.type}
					message={notification.message}
					duration={5000}
					onClose={() => setNotification(null)}
				/>
			)}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-3 max-w-"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										className="bg-slate-50 border-1 border-grayLight text-background"
										placeholder="John Donut"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										className="bg-slate-50 border-1 border-grayLight text-background"
										placeholder="johndoughnut@io.com"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="messages"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										className="bg-slate-50 border-1 border-grayLight text-background"
										placeholder="Enter message here..."
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						effect="shineHover"
						className="w-full bg-primaryDark"
						type="submit"
						disabled={isSubmitting}
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default Contactform;
