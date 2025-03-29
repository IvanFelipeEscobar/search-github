import { Repository } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const countForkedRepos = (
  repos: Repository[]
): { repo: string; count: number }[] => {
  if (repos.length === 0) return []
  const forked = repos
    .map((repo) => ({ repo: repo.name, count: repo.forkCount }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
  return forked
}

export const countStarredRepos = (
  repos: Repository[]
): { repo: string; stars: number }[] => {
  if (repos.length === 0) return []
  const starred = repos
    .map((repo) => ({ repo: repo.name, stars: repo.stargazerCount }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)

  return starred
}

export const countLanguages = (
  repos: Repository[]
): { language: string; count: number }[] => {
  if (repos.length === 0) return []

  const languageCount: { [key: string]: number } = {}

  repos.forEach((repo) => {
    if (repo.languages.edges.length === 0) return

    repo.languages.edges.forEach(
      (lang) =>
        (languageCount[lang.node.name] =
          (languageCount[lang.node.name] || 0) + 1)
    )
  })

  if (Object.keys(languageCount).length === 0) return []
  return Object.entries(languageCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0,5)
    .map(([language, count]) => ({ language, count }))
}
