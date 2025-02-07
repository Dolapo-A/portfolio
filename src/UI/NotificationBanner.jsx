/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const NotificationBanner = ({
	message,
	type,
	duration = 10000, // 5 seconds by default
	onClose,
}) => {
	const [isVisible, setIsVisible] = useState(true);
	const [progress, setProgress] = useState(100);

	useEffect(() => {
		const startTime = Date.now();
		const endTime = startTime + duration;

		const timer = setInterval(() => {
			const now = Date.now();
			const remaining = endTime - now;
			const progressPercent = (remaining / duration) * 100;

			if (remaining <= 0) {
				clearInterval(timer);
				setIsVisible(false);
				onClose?.();
			} else {
				setProgress(progressPercent);
			}
		}, 10);

		return () => clearInterval(timer);
	}, [duration, onClose]);

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-4 right-4 w-96 z-50 animate-slide-in">
			<div
				className={`relative overflow-hidden rounded-lg shadow-lg ${
					type === "success"
						? "bg-emerald-50 border border-emerald-200"
						: "bg-rose-50 border border-rose-200"
				}`}
			>
				<div className="px-4 py-3">
					<div className="flex items-center justify-between">
						<p
							className={`text-sm font-medium ${
								type === "success" ? "text-emerald-800" : "text-rose-800"
							}`}
						>
							{message}
						</p>
						<button
							onClick={() => {
								setIsVisible(false);
								onClose?.();
							}}
							className={`ml-4 inline-flex ${
								type === "success"
									? "text-emerald-400 hover:text-emerald-600"
									: "text-rose-400 hover:text-rose-600"
							}`}
						>
							<X size={18} />
						</button>
					</div>
				</div>

				{/* Progress bar */}
				<div
					className={`h-1 ${
						type === "success" ? "bg-emerald-200" : "bg-rose-200"
					}`}
				>
					<div
						className={`h-full transition-all ease-linear ${
							type === "success" ? "bg-emerald-500" : "bg-rose-500"
						}`}
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default NotificationBanner;
