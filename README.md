# Rendu TTD
## Question 1
**En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés.**

Le TDD (_Test Driven Development_) est une méthodologie de développement consistant à vérifier la cohérence entre les attendus par rapport à des fonctionnalités et le code fournit, et ce par la vérifier leur mise en place par la création **préalable** de tests. Il se décline en trois étapes clés : rédaction d'un test (qui définit les résultats qu'on attend, et casse au début), rédaction du code (écrire le code le plus simple possible afin de valider le test), réfracto (amélioration du code et des fonctionnalités mises en place au-delà du passage des tests).

## Question 2
**Citez deux avantages concrets du TDD.**

Le TDD permet :
- de facilement implémenter de nouvelles fonctionnalités tout en vérifiant que cela n'a pas mis en péril d'autres aspects de notre application
- mettre en place une architecture claire et qui répond aux besoins réels du client, car mettant au coeur de notre activité le fait de répondre à ces-dits besoins

## Question 3
**Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide.**

Un fake reprend le fonctionnement et le comportement d'une base de données, mais en restant limité à la mémoire. De ce fait, il permet de reprendre toute la logique métier, sans cependant avoir une réelle base de données associée à notre projet ou à nos tests.
Un stud, quant à lui, ne renvoie qu'une seule et unique information.

Ainsi, un stud est utile pour imiter des éléments simples et le renvoie d'une donnée unique. A l'inverse, le fake comprend beaucoup plus d'intelligence, mais aussi plus de codes, car il peut être utilisé afin de gérer des listes, des objets complexes, etc.

Pour illustrer, on utiliserait un stud lorsqu'on cherche à isoler un élément simple et obtenir une réponse précise (un envoi d'email par exemple), tandis qu'on utiliserait plutôt un fake dans le cas où l'on cherche à obtenir une vérification sur une fonctionnalité ayant un comportement plus complexe (vérifier qu'une personne existe bien dans une base de données après avoir été créée par exemple)

## Pipeline CI/CD
Je metterais en place un workflow CI, qui se déclencherais lors d'un push ou d'un PR, et qui installe les dépendances, exécute lint/build puis exécute `npm test` et publie le rapport de couverture comme artifact. Le job doit échouer si les tests échouent. J’ajouterais des checks obligatoires sur les branches protégées, un badge de statut dans le README et un job optionnel de déploiement/release conditionné au succès des tests.