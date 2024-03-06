# Polecenia

## Kubectl

```bash
kubectl version --client # Wersja klienta
kubectl cluster-info # Informacje o podlaczonym klastrze

kubectl apply -f=deployment.yml # Aktualizacja konfiguracji

kubectl get deployments
kubectl get services
```

## Minikube

```bash
minikube start
minikube stop

minikube dashboard # Uruchamia panel UI

minikube service <serviceName> # expose service to outside world (np. minikube service backend-nestjs)
```
