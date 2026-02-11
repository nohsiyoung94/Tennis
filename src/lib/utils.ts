import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// clsx와 tailwind-merge를 결합하여 조건부 클래스 병합을 안전하게 처리
// 예: cn('bg-red-500', isSelected && 'text-white') -> 중복 클래스 제거 및 병합
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
