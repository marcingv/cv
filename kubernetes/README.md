# Polecenia

## Kubectl

```bash
kubectl version --client # Wersja klienta
kubectl cluster-info # Informacje o podlaczonym klastrze

kubectl apply -f=deployment.yml # Aktualizacja konfiguracji

kubectl get deployments
kubectl get services
kubectl get pods

kubectl delete -f=deployment.yml # Usuniecie deploymentu na podstawie konfiguracji
kubectl delete deployment <deploymentName> # Usuniecie deploymentu po nazwie

kubectl rollout status deployment/cv-app-backend-deployment # Status aktualizacji deployment
kubectl rollout history deployment/cv-app-backend-deployment # Historia deploymentow
kubectl rollout history deployment/cv-app-backend-deployment --revision=1 # Szczegoly konkretnego deploymentu
kubectl rollout undo deployment/cv-app-backend-deployment # Wycofanie ostatniego deploymentu
kubectl rollout undo deployment/cv-app-backend-deployment --to-revision=1 # Wycofanie deploymentu do konkretnej wczesniejszej wersji

# Restart deploymentow (np. po aktualizacji obrazow DockerHUB bez aktualizacji kubernetesa)
kubectl rollout restart deployment/cv-app-backend-deployment
kubectl rollout restart deployment/cv-app-frontend-deployment

kubectl get namespaces # Lista namespace'ow

# Zmiana konfiguracji klastra
# https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/
# https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/

cd $HOME/.kube

# Ustawienie permanentne w pliku ~/.bashrc
export KUBECONFIG=${HOME}/.kube/config:${HOME}/.kube/dev-microk8s.config

kubectl config get-contexts
kubectl config get-contexts --kubeconfig dev-microk8s.config

kubectl config --kubeconfig=config use-context minikube
kubectl config --kubeconfig=dev-microk8s.config use-context microk8s
kubectl config use-context microk8s
kubectl config use-context minikube
```/home/marcin/.kube/config:/home/marcin/.kube/dev-microk8s.config

## Minikube

```bash
minikube start
minikube stop

minikube dashboard # Uruchamia panel UI

minikube service <serviceName> # expose service to outside world
minikube service cv-backend-service
minikube service cv-frontend-service
```

## Microk8s

```bash
# Uruchomienie dashboard UI
microk8s dashboard-proxy

# Wydruk pliku konfiguracyjnego umozliwiajacego zarzadzanie klasterem przez kubectl
microk8s.config

```
